import{j as e}from"./iframe-DE_VUmzH.js";import{A as j}from"./ActionGroup-D7BMZlz4.js";import{B as p}from"./Button-DbOovzUR.js";import{L as t}from"./Label-C_7a3H9g.js";import{S as f}from"./Section-BPBjEx0Y.js";import{T as n}from"./TextField-CwR-rNCB.js";import{a as V,u as b,F,t as S}from"./Form-B3NWL6IN.js";import{s as g}from"./Action-D0USOjD9.js";import"./index-Cun1SEai.js";import"./dynamic-LCnuwqI9.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./clsx-B-dksMZM.js";import"./index-C0xI9_WX.js";import"./getActionGroupSlot-_T8J6cWZ.js";import"./useStatic-DLzms8z8.js";import"./IconWarning-Lvj7TBfh.js";import"./Text-CuCsgm5W.js";import"./browser-BDXGgXpt.js";import"./EmulatedBoldText-RoWFJZi8.js";import"./Text-BVPFWEoO.js";import"./utils-D3dUv10b.js";import"./LoadingSpinner-cO76IOgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./context-Ki1OMBAj.js";import"./Button-BBiOSwoI.js";import"./ProgressBar-Byi_x-zn.js";import"./Label-C28iUhCz.js";import"./Hidden-NzD2YlQI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C4uXeX2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUyQx-Vz.js";import"./useFocus-DNFgJiAK.js";import"./useFocusRing-Cc9ULfoH.js";import"./useFocusable-DpHFaro7.js";import"./ContextMenuSection-CJDCObRd.js";import"./Dialog-BNbjTQaX.js";import"./RSPContexts-C9-aSZWC.js";import"./OverlayArrow-DyFt8UKI.js";import"./useControlledState-Bb_Q1JoV.js";import"./Collection-DYVSusLB.js";import"./CollectionBuilder-OxR4IyWH.js";import"./context-COqjh3TT.js";import"./Separator-DKoX_8iu.js";import"./SelectionManager-CXLB6fpE.js";import"./useEvent-YlDniR0o.js";import"./useCollator-BsMiccdt.js";import"./FocusScope-BTm6JbhF.js";import"./VisuallyHidden-B4hxOAM_.js";import"./TextFieldBase-B43sdA3O.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-C4vr9PyS.js";import"./FieldError-CsnZ7kCy.js";import"./FieldDescription-BQJEweKA.js";import"./TextField-g5KEI_sp.js";import"./Form-BGVwlTzA.js";import"./Group-CvoE6evJ.js";import"./Input-x4gbvJ5z.js";import"./useTextField-BSYft9Rt.js";import"./useFormReset-C704hud4.js";import"./useFormValidation-BsrhrDQJ.js";import"./ReactAriaControlledValueFix-CVBQZUE2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-CuPWpeXC.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ue=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ue as __namedExportsOrder,Me as default};
