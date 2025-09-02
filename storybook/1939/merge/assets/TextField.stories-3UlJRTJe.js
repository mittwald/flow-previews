import{j as e}from"./iframe-BmZalVao.js";import{A as j}from"./ActionGroup-CsMbHyyk.js";import{B as p}from"./Button-V4gWXU1O.js";import{L as o}from"./Label-Cd70f9RY.js";import{S as f}from"./Section-CZTKaF4D.js";import{T as n}from"./TextField-CDR0kvBr.js";import{a as N,u as b,F,t as S}from"./Form-DL0Mu2pj.js";import{s as O}from"./Action-Bg05qC2u.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bu_U71dX.js";import"./useStatic-CmyP-4Qc.js";import"./IconWarning-Uta2YDJP.js";import"./Text-1n2lmTX2.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";import"./Text-fNTtgWDx.js";import"./utils-CAvZ88A2.js";import"./LoadingSpinner-D3X9xJLw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./context-CHBdcuz4.js";import"./Button-B7Mfw9fE.js";import"./ProgressBar-B81Zb8lf.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dcdc4QL3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ceZxyZeS.js";import"./useFocus-CJp-zb5k.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./ContextMenuSection-a2v3yfqf.js";import"./Dialog-Ck302eWi.js";import"./RSPContexts-CXUSdcNb.js";import"./OverlayArrow-W1WVUYgG.js";import"./useControlledState-DkevdXcu.js";import"./Collection-CssVnDWl.js";import"./CollectionBuilder-1RXdNJ75.js";import"./Separator-CxpVYPZi.js";import"./Group-DxIJd-p3.js";import"./SearchField-DC-QuQzo.js";import"./FieldError-Bd-ukmcE.js";import"./Form-B9rSyzAs.js";import"./useTextField-CryG3TpM.js";import"./useFormReset-BvOmhq3S.js";import"./TextField-BS0IdMWE.js";import"./useEvent-C050BYP-.js";import"./SelectionManager-B-lKeVzN.js";import"./useCollator-B5Q-zmAD.js";import"./FocusScope-H3r5uJpM.js";import"./VisuallyHidden-CzhjBb86.js";import"./TextFieldBase-Dr1QZ8rr.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-bqAUw6AE.js";import"./FieldDescription-C1acGmui.js";import"./ReactAriaControlledValueFix-C0NOXItS.js";import"./context-Dnd0SHjI.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
