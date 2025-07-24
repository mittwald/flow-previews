import{j as e}from"./iframe-B14Hztna.js";import{A as j}from"./ActionGroup-Bw_y0i8m.js";import{B as p}from"./Button-CgtdFPzc.js";import{L as o}from"./Label-zfejy0bC.js";import{S as f}from"./Section-CaEQ397A.js";import{T as m}from"./TextField-CbiPIbbp.js";import{a as N,u as b,F,t as S}from"./Form-DNeIsDac.js";import{s as O}from"./Action-C7DGnd--.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Coxgvja7.js";import"./useStatic-CMMnV-8N.js";import"./IconWarning-EXdx-O5E.js";import"./Text-CvN8mc0t.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";import"./Text-CpIc-G8R.js";import"./utils-DoVwnhJ7.js";import"./LoadingSpinner-BUgI2O_m.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./context-ClRpg4Pi.js";import"./Button-C-dpYs0v.js";import"./ProgressBar-DTeLqJx_.js";import"./Label-Dj1DBquH.js";import"./Hidden-DEGhv2S1.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ9idzkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIDHtETH.js";import"./useFocus-DUtc_xDc.js";import"./useFocusRing-BniRYtyP.js";import"./useFocusable-qJIKezDE.js";import"./ContextMenuSection-CZ89H5a4.js";import"./Dialog-BFvasG0n.js";import"./RSPContexts-Bfi0I49R.js";import"./OverlayArrow-DZfk_ErB.js";import"./useControlledState-ByF29kyY.js";import"./Collection-fH4Kmtgq.js";import"./CollectionBuilder-bLuJ-4e5.js";import"./Separator-D2GbxrzK.js";import"./Input-DpcS1CTS.js";import"./SearchField-BKuT-taP.js";import"./FieldError-Bx0_OVZy.js";import"./Form-Dxjc7g8l.js";import"./Group-CBVKEx7-.js";import"./useTextField-BRjgXeuB.js";import"./useFormReset-C7VrIa_J.js";import"./TextField-CPtvewAJ.js";import"./SelectionManager-DXvn-F5v.js";import"./useEvent-CXj5GaK9.js";import"./useCollator-BOITc0eH.js";import"./FocusScope-GGet2N6d.js";import"./VisuallyHidden-B90-554O.js";import"./TextFieldBase-BydP-Qm-.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DMf0Tswo.js";import"./FieldDescription-BwyiFDmb.js";import"./ReactAriaControlledValueFix-BqvDOkT-.js";import"./context-BfdzKOWn.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};
