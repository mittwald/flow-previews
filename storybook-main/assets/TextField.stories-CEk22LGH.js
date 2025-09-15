import{j as e}from"./iframe-BEG7G6KF.js";import{A as j}from"./ActionGroup-CUmh4KBz.js";import{B as l}from"./Button-C8pjFnNt.js";import{L as t}from"./Label-BWItg-fg.js";import{S as f}from"./Section-BQ8A7HK_.js";import{T as n}from"./TextField-BJyhJ5Jn.js";import{a as V,u as b,F,t as S}from"./Form-B44GHEDz.js";import{s as g}from"./Action-DW9QNbuj.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-P9UQ3z6q.js";import"./useStatic-HcSwkvD9.js";import"./IconWarning-a2LhFy5L.js";import"./Text-CsmURpVi.js";import"./browser-hhGcWijl.js";import"./EmulatedBoldText-BEr1TBhP.js";import"./Text-CjtFlosk.js";import"./utils-LUgpLpbe.js";import"./LoadingSpinner-SGV_yUHE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./context-PcVqvq8B.js";import"./Button-DTQhGa04.js";import"./ProgressBar-ZHT95b40.js";import"./Label-14uT22y-.js";import"./Hidden-CoHG5x6F.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bw-P6Vd2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CNi18aVS.js";import"./useFocus-C-WlMmOQ.js";import"./useFocusRing-COhl_nbF.js";import"./useFocusable-CiBlyEkt.js";import"./ContextMenuSection-CZDyQTp9.js";import"./Dialog-B1wekzMl.js";import"./RSPContexts-BS1UUkSC.js";import"./OverlayArrow-DQ1DVDYI.js";import"./useControlledState-D4nWDDQs.js";import"./Collection-Q6_7RVnG.js";import"./CollectionBuilder-BfQ_bfa9.js";import"./Separator-CEaf2o7P.js";import"./Group-Bu8ViuOf.js";import"./SearchField-DCAIqxcw.js";import"./FieldError-Ce2Todsu.js";import"./Form-CRnDK1No.js";import"./useTextField-DYB1JFCS.js";import"./useFormReset-D7bUq-wz.js";import"./TextField-BtimxscU.js";import"./useEvent-CaCnB0bX.js";import"./SelectionManager-CXVNswVM.js";import"./useCollator-CTD1PftI.js";import"./FocusScope-CVsbtSBN.js";import"./VisuallyHidden-DBx6majZ.js";import"./TextFieldBase-Bfac5SxX.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-wC63IlUB.js";import"./FieldDescription-DD32srnx.js";import"./ReactAriaControlledValueFix-BPvVbRNR.js";import"./context-C9GFjuXq.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),we={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(l,{type:"reset",children:"Reset"}),e.jsx(l,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(l,{type:"submit",children:"Submit"})})]})})}};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
