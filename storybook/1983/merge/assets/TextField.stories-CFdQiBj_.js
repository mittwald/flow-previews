import{j as e}from"./iframe-BJ0F67WV.js";import{A as j}from"./ActionGroup-BQ0PFHwd.js";import{B as l}from"./Button-CnQZL08m.js";import{L as t}from"./Label-DdDrAhKV.js";import{S as f}from"./Section-DYjzF64I.js";import{T as n}from"./TextField-DPoUNl5Q.js";import{a as V,u as b,F,t as S}from"./Form-CphuCCBx.js";import{s as g}from"./Action-DQsKkgIU.js";import"./dynamic-D4EbkcOt.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./clsx-B-dksMZM.js";import"./index-C5tuckEm.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./useStatic-BcjnPkg-.js";import"./IconWarning-D8lhACCL.js";import"./Text-DvcA_djt.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Text-DUTh34WN.js";import"./utils-CfdyWDg2.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./context-DDk-RgEI.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0-WYOlY.js";import"./useFocus-N8Qk0gvU.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./ContextMenuSection-Dlp4NHpV.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./useControlledState-g4NJV7ij.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./Group-CRkQVq-1.js";import"./SearchField-K6WJ8JUX.js";import"./FieldError-zuZgMzEa.js";import"./Form-aW46NXWl.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./TextField-CsP4pSiS.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";import"./TextFieldBase-DoEesKfD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B5pU0GHC.js";import"./FieldDescription-COCDalyM.js";import"./ReactAriaControlledValueFix-CXV4MYur.js";import"./context-DqfxRtzM.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),we={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(l,{type:"reset",children:"Reset"}),e.jsx(l,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(l,{type:"submit",children:"Submit"})})]})})}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
