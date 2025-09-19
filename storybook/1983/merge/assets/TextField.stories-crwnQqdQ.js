import{j as e}from"./iframe-C41GO6P6.js";import{A as j}from"./ActionGroup-BO8EJ9_Y.js";import{B as p}from"./Button-EU7ZCBUb.js";import{L as t}from"./Label-BmUyaMI1.js";import{S as f}from"./Section-kaw1-Ecj.js";import{T as n}from"./TextField-C3lsHKjR.js";import{a as V,u as b,F,t as S}from"./Form-DfG2V2ai.js";import{s as g}from"./Action-DU6nM0zW.js";import"./dynamic-DxnCaHhV.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-BqgUIaia.js";import"./useStatic-DHBtTVNq.js";import"./IconWarning-C5RwbqDR.js";import"./Text-BYSgteT5.js";import"./browser-DspoMTVt.js";import"./EmulatedBoldText-CJIUXOgz.js";import"./Text-Bnb73OL0.js";import"./utils-Be5F4DcQ.js";import"./LoadingSpinner-MF8PlszG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./context-Om8YW_Qo.js";import"./Button-DlD3fRGu.js";import"./ProgressBar-BdICdwMW.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel--RfYT5XW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSqdD5KI.js";import"./useFocus-CcyM5uvG.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocusable-DyjaqCu5.js";import"./ContextMenuSection-BlJvGXA9.js";import"./Popover-DEl9axMZ.js";import"./DialogTriggerView-BwB5gCJZ.js";import"./context-1RA5jvOs.js";import"./RSPContexts-B6QAlzIf.js";import"./ClearPropsContextView-CpAffOzl.js";import"./useControlledState-D2xxPiTl.js";import"./FocusScope-V0DR1oSw.js";import"./useCollator-D5nYlsQq.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./Collection-C5OyY5G9.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Separator-CWruQEFN.js";import"./Group-celsVWdW.js";import"./SearchField-BbBM1aCT.js";import"./FieldError-qUs-TTn2.js";import"./Form-DZUJdQjd.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./TextField-DApuMKmH.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";import"./Switch-CPNMTTop.js";import"./useToggleState-Dbq0WoWL.js";import"./TextFieldBase-B3oAhElk.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DxG-LHoh.js";import"./FieldDescription-DhiOcCPR.js";import"./ReactAriaControlledValueFix-BW-fLwFe.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
