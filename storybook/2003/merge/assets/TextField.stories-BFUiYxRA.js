import{j as e}from"./iframe-BJWngGl7.js";import{A as j}from"./ActionGroup-DqoNe3tH.js";import{B as p}from"./Button-Dpovk5Ay.js";import{L as t}from"./Label-DuDbuPqK.js";import{S as f}from"./Section-BERpR9JG.js";import{T as n}from"./TextField-DDV5_IJ_.js";import{a as V,u as b,F,t as S}from"./Form-DDo3nbid.js";import{s as g}from"./Action-1l9_L_W5.js";import"./dynamic-D7o2EbQn.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-BcQW_u77.js";import"./useStatic-BpRokF7z.js";import"./IconWarning-CLxGQCa2.js";import"./Text-D-lw11hw.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";import"./Text-zfbbvU9b.js";import"./utils-BjLoxrER.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./context-ZX7huqtR.js";import"./Button-BC63ENzq.js";import"./ProgressBar-IjP_LWAf.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bx1Ga4ml.js";import"./useFocus-B52D3fzv.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./ContextMenuSection-CXXK-GFz.js";import"./Popover-DBKfYnMB.js";import"./DialogTriggerView-G0XTVNWS.js";import"./context-D9sg3hhH.js";import"./RSPContexts-1ZAuRZHz.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./useControlledState-DIKMvFKO.js";import"./FocusScope-DwCuMKHy.js";import"./useCollator-Qs-Te_M3.js";import"./VisuallyHidden-5aVnsY39.js";import"./Collection-CxJ7q3qS.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Separator-DE1lcCbm.js";import"./Group-BEwONPHD.js";import"./SearchField-Cm99TGpl.js";import"./FieldError-RjUORd-P.js";import"./Form-DRROzcFd.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./TextField-BtON624e.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";import"./Switch-CG1SlLpX.js";import"./useToggleState-BSRRsi4v.js";import"./TextFieldBase-XoGmctDW.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BQmnq4AI.js";import"./FieldDescription-CU15SeiK.js";import"./ReactAriaControlledValueFix-Dql89lWY.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
