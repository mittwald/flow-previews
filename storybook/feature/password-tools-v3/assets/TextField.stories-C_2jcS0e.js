import{j as e}from"./iframe-DycaE4yP.js";import{A as j}from"./ActionGroup-Di5U11XN.js";import{B as p}from"./Button-BWHwfPz8.js";import{L as o}from"./Label-BhJAUeA3.js";import{S as f}from"./Section-CHnRBSdb.js";import{T as n}from"./TextField-CvNZSCNd.js";import{a as N,u as b,F,t as S}from"./Form-BkDchlg1.js";import{s as O}from"./Action-C2FublHi.js";import"./PropsContextProvider-K6I7evOF.js";import"./mergeRefs-DRF5sLLW.js";import"./index-DZjp0r4-.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D0R13xpG.js";import"./useStatic-CVcbCwvf.js";import"./IconWarning-CT1lcMza.js";import"./Text-D7PtYJH6.js";import"./browser-BH60Xdrt.js";import"./EmulatedBoldText-BQ7yahrw.js";import"./Text-Co__d8QG.js";import"./utils-BKIW_WGl.js";import"./LoadingSpinner-DrmlO1GU.js";import"./useLocalizedStringFormatter-D4Reb_cV.js";import"./context-CtP3BLUn.js";import"./Button-YH6NiS1R.js";import"./ProgressBar-B6sVEMf9.js";import"./Label-BzQKezRD.js";import"./Hidden-BOdEkm3m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dwjvyt4X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bp56TFyM.js";import"./useFocus-V6VDc_9L.js";import"./useFocusRing-DwXXK7Ot.js";import"./useFocusable-kod0IUYw.js";import"./ContextMenuSection-DLY8Y8o7.js";import"./Dialog-C2wfDSZ9.js";import"./RSPContexts-CBFW3KNe.js";import"./OverlayArrow-PE1jPlIu.js";import"./useControlledState-Do7JB9n2.js";import"./Collection-CWz6U0aO.js";import"./CollectionBuilder-CrmAPeoT.js";import"./Separator-Co3J7Hys.js";import"./Group-KDDOI2Xy.js";import"./SearchField-B79VrsM9.js";import"./FieldError-BPjBaqMq.js";import"./Form-BeDIwDDj.js";import"./useTextField-B1Jeh3_Y.js";import"./useFormReset-CJg24Tdt.js";import"./TextField-CUQT97wD.js";import"./useEvent-BR-ARNpt.js";import"./SelectionManager-D8Ui2ebE.js";import"./useCollator-CouMmKeo.js";import"./FocusScope-DfGH1q4v.js";import"./VisuallyHidden-BS8Lf4nY.js";import"./TextFieldBase-BXqKiEup.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DPl0RnJm.js";import"./FieldDescription-CcXqJ_lS.js";import"./ReactAriaControlledValueFix-snfcoxQ5.js";import"./context-D9a_udGZ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
