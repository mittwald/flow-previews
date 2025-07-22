import{j as e}from"./iframe-B7LyKmrW.js";import{A as j}from"./ActionGroup-DsUU57mw.js";import{B as p}from"./Button-Ds6YhjxA.js";import{L as o}from"./Label-GaOPpfpv.js";import{S as f}from"./Section-D9jdicfR.js";import{T as m}from"./TextField-nHXCRHR2.js";import{a as N,u as b,F,t as S}from"./Form-B91KfbSi.js";import{s as O}from"./Action-CvLnil_l.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-HbE0eD39.js";import"./useStatic-ae9ekjn3.js";import"./IconWarning-B2C8hMVq.js";import"./Text-DUoUD__5.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";import"./Text-54Sx_nhu.js";import"./utils-C7pz24DF.js";import"./LoadingSpinner-D8va-Paf.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./context-Bp1vmlVu.js";import"./Button-CnMvl_pE.js";import"./ProgressBar-D1vTXEVZ.js";import"./Label-DSgSzVuQ.js";import"./Hidden-DplB-rWb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B_uxGEkZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BUy08s3B.js";import"./useFocus-S4LYa827.js";import"./useFocusRing-DxiExAh_.js";import"./useFocusable-UsZUFP92.js";import"./ContextMenuSection-DJqVjpwe.js";import"./Dialog-CbKwT-DG.js";import"./RSPContexts-mttXOxPq.js";import"./OverlayArrow-BOgzAv2q.js";import"./useControlledState-QzhULpBn.js";import"./Collection-BACulWrY.js";import"./CollectionBuilder-1KlzsV_3.js";import"./Separator-CilFnH5A.js";import"./Input-bFGBOkXz.js";import"./SearchField-VyG8Gz3p.js";import"./FieldError-52nE40UF.js";import"./Form-DFMSXVCD.js";import"./Group-BkSjpW6j.js";import"./useTextField-DpE7FPF6.js";import"./useFormReset-Cbj20zLi.js";import"./TextField-x_YXs-HX.js";import"./SelectionManager-CkybOUE-.js";import"./useEvent-BgU4gnPl.js";import"./useCollator-B3crgtAr.js";import"./FocusScope-cqMoFFNL.js";import"./VisuallyHidden-BpBET9_R.js";import"./TextFieldBase-B8TNzjVi.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CQSXAN4S.js";import"./FieldDescription-BOBiES0b.js";import"./ReactAriaControlledValueFix-CjLV8Mtp.js";import"./context-Bn8MzZjp.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
