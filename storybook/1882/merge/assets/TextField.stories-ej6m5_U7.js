import{j as e}from"./iframe-sBvqvo7_.js";import{A as j}from"./ActionGroup-CYkj3HcD.js";import{B as p}from"./Button-J4OQPVw4.js";import{L as o}from"./Label-DV1oDC-Q.js";import{S as f}from"./Section-DCCkLpli.js";import{T as n}from"./TextField-DLWBLsGZ.js";import{a as N,u as b,F,t as S}from"./Form-BZahs9im.js";import{s as O}from"./Action-DhYbBupW.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-ZeckI-n0.js";import"./useStatic-Mefs6JzB.js";import"./IconWarning-BMngykPL.js";import"./Text-C6wVel0M.js";import"./browser-DLpa1UK_.js";import"./EmulatedBoldText-MyVSeX0t.js";import"./Text-CAc83Hwb.js";import"./utils-B2LriU5l.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./context-C3R-osbZ.js";import"./Button-C8-y5amo.js";import"./ProgressBar-BAnWuAWU.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAWuGzS8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-seZ0T8mb.js";import"./useFocus-CVs-BOzj.js";import"./useFocusRing-B1VapAs-.js";import"./useFocusable-DA4OWrdg.js";import"./ContextMenuSection-DTqupSqy.js";import"./Dialog-BQE4o9PA.js";import"./RSPContexts-E7RieiUt.js";import"./OverlayArrow-CI59sRmD.js";import"./useControlledState-B_tC48lN.js";import"./Collection-Cp6lnTRm.js";import"./CollectionBuilder-D_PhybFO.js";import"./Separator-CaNgrCXh.js";import"./Group-DK1ZbmQa.js";import"./SearchField-B2Einoci.js";import"./FieldError-D_EBRzZI.js";import"./Form-DRweiQ4m.js";import"./useTextField-D2S0T5Ek.js";import"./useFormReset-CzZ7gXc_.js";import"./TextField-Dg3JsHEK.js";import"./useEvent-vEElTzYQ.js";import"./SelectionManager-D2TfpwIm.js";import"./useCollator-B6u88yWd.js";import"./FocusScope-Emgqt3PD.js";import"./VisuallyHidden-DUx1qTAb.js";import"./TextFieldBase-fjvumnTa.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BOIuciEr.js";import"./FieldDescription-BhaZsciE.js";import"./ReactAriaControlledValueFix-DuPmXFx6.js";import"./context-DwGzY_iF.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
