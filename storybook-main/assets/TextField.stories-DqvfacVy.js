import{j as e}from"./iframe-QYa5fCvd.js";import{A as j}from"./ActionGroup-B8EbhdWH.js";import{B as p}from"./Button-DtEggira.js";import{L as t}from"./Label-REb55_aV.js";import{S as f}from"./Section-DfsoS9tc.js";import{T as n}from"./TextField-Baju2b12.js";import{a as V,u as b,F,t as S}from"./Form-DcoODqVz.js";import{s as g}from"./Action-BQI9QTKN.js";import"./dynamic-BhpRGc-9.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-8GawWr3Y.js";import"./useStatic-DIir9R4I.js";import"./IconWarning-DEqdDiS_.js";import"./Text-D98HT4db.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Text-BD3o8xQb.js";import"./utils-lb8KrrIv.js";import"./LoadingSpinner-DKDkxF6a.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./context-BsMul4n4.js";import"./Button-u3ZYuRRI.js";import"./ProgressBar-BeUyRfom.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKI1i-pB.js";import"./useFocus-D2QZKYlR.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./ContextMenuSection-BNRXmqNj.js";import"./Popover-BojVT5-a.js";import"./DialogTriggerView-DucWr1Mr.js";import"./context-NUuZzhZl.js";import"./RSPContexts-uNufUlk-.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./useControlledState-Bu1M14oY.js";import"./FocusScope-ByQquqFt.js";import"./useCollator-EfErOZQE.js";import"./VisuallyHidden-B3sifiz6.js";import"./Collection-DAGhelkx.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Separator-CsR4K24c.js";import"./Group-BKMRBfUs.js";import"./SearchField-BY7ftgY4.js";import"./FieldError-BGtuYqZa.js";import"./Form-BOiG0M1T.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./TextField-DYh5UApz.js";import"./useEvent-D3g7XMTk.js";import"./SelectionManager-yhE4bEMZ.js";import"./Switch-58030LT7.js";import"./useToggleState-CGSsvXtE.js";import"./TextFieldBase-CUcG1Nye.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DIhpKsfz.js";import"./FieldDescription-qfycfnRL.js";import"./ReactAriaControlledValueFix-C2f91eDD.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
