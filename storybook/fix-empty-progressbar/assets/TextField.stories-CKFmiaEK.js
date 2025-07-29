import{j as e}from"./iframe-D6sRUaJR.js";import{A as j}from"./ActionGroup-Dd5f-Z6K.js";import{B as p}from"./Button-BCWx4ySg.js";import{L as o}from"./Label-DQJ-81B_.js";import{S as f}from"./Section-BIemj20a.js";import{T as n}from"./TextField-CtGpYgCf.js";import{a as N,u as b,F,t as S}from"./Form-CjKEb3B2.js";import{s as O}from"./Action-C3Ui2vCc.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CM5KPANG.js";import"./useStatic-D2ZqCWbX.js";import"./IconWarning-D8wqW4GU.js";import"./Text-CzI-SNLy.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";import"./Text-C9PfWAJQ.js";import"./utils-Qm7xLU3y.js";import"./LoadingSpinner-m9O8-gUX.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./context-DolFftfM.js";import"./Button-Bca1GoSv.js";import"./ProgressBar-Bwt4IvIC.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BTkVtPxw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./useFocus-CTtv6tdW.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./ContextMenuSection-zU-8WIXY.js";import"./Dialog-DZPDGKPA.js";import"./RSPContexts-BRIM2Iem.js";import"./OverlayArrow-Dkw6_o-u.js";import"./useControlledState-D69o91XC.js";import"./Collection-DXulOg_H.js";import"./CollectionBuilder-Qk8YBnFP.js";import"./Separator-DEM_icnQ.js";import"./Group-Bshd2yUf.js";import"./SearchField-Di5tRiho.js";import"./FieldError-SaPVkD34.js";import"./Form-Cgvv5odv.js";import"./useTextField-Dr42bSM8.js";import"./useFormReset-DcxoBJFg.js";import"./TextField-Bj0PDkEJ.js";import"./useEvent-BymtUDWP.js";import"./SelectionManager-D0QYa18J.js";import"./useCollator-DXk_KV0D.js";import"./FocusScope-B2gr6wNX.js";import"./VisuallyHidden-VL3LzDcs.js";import"./TextFieldBase-DFUqyPnn.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-1_TiWSqX.js";import"./FieldDescription-r1hXLVsl.js";import"./ReactAriaControlledValueFix-DPnGiPfN.js";import"./context-CqKUxs9o.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
