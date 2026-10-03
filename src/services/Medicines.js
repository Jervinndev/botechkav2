import { supabase } from '../supabase/supabase.js'



export async function Addmedicine(medicineData) {
    const { data, error } = await supabase
        .from('medicines')
        .insert(medicineData)
        .select()

    if (error) throw new Error(error.message)
    return data[0]
}

export async function addCategory(categoryData) {
    try {
        const { data, error } = await supabase
            .from('medicine_categories')
            .insert([
                {
                    category_name: categoryData.name,
                    description: categoryData.description,
                    status: 'Active'
                }
            ])
            .select()

        if (error) throw error
        return { data, error: null }
    } catch (error) {
        console.error('Error in addCategory service:', error.message)
        return { data: null, error }
    }
}


// export async function Addmedicinecategories(medicinescategoryData) {
//     const { data, error } = await supabase
//         .from('medicine_categories')
//         .insert(medicinescategoryData)
//         .select()

//     if (error) throw new Error(error.message)
//     return data[0]
// }