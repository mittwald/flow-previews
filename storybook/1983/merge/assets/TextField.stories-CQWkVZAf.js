import{j as e}from"./iframe-Ci7am5-x.js";import{A as j}from"./ActionGroup-IW_jjQv0.js";import{B as p}from"./Button-BxQcAiXL.js";import{L as t}from"./Label-OU3LAgfN.js";import{S as f}from"./Section-DRrAxwkd.js";import{T as n}from"./TextField-C_hDoOfn.js";import{a as V,u as b,F,t as S}from"./Form-BPQbWRCw.js";import{s as g}from"./Action-LHdszVl-.js";import"./dynamic-BJQQnM_P.js";import"./PropsContextProvider-CQR7cNuW.js";import"./mergeRefs-BZZ4k-un.js";import"./index-BSkYpBON.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-q-TSSyCY.js";import"./useStatic-B16OfDVI.js";import"./IconWarning-CzB8zWov.js";import"./Text-QWIhyI-d.js";import"./browser-1MQn7X-d.js";import"./EmulatedBoldText-Cc0xL4Af.js";import"./Text-CnPMclzL.js";import"./utils-D8LfxOEa.js";import"./LoadingSpinner-t4rMaxgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BI8Ehzs7.js";import"./context-CzmRZySI.js";import"./Button-ByeNiRqN.js";import"./ProgressBar-D-kh5LUH.js";import"./Label-j8HR0Ono.js";import"./Hidden-6Fb8M7jx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TZmyIU6H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C06syjH3.js";import"./useFocus-ayIEkHl9.js";import"./useFocusRing-D6Pp4FJL.js";import"./useFocusable-ChczIcK6.js";import"./ContextMenuSection-DZA45UBM.js";import"./Popover-Dm762mUl.js";import"./DialogTriggerView-DeMR5m7g.js";import"./context-Bg2fb23R.js";import"./RSPContexts-DC069Ofk.js";import"./ClearPropsContextView-QzLGn3tG.js";import"./useControlledState-D4tytcWm.js";import"./FocusScope-2jIUVF7d.js";import"./useCollator-CP32wxPf.js";import"./VisuallyHidden-Bwug4jVH.js";import"./Collection-DbXsSG3M.js";import"./CollectionBuilder-CfQBwOi0.js";import"./Separator-DH-Qy1Ob.js";import"./Group-Blfbn2Yc.js";import"./SearchField-DgvC1Z9-.js";import"./FieldError-DZKw4mWV.js";import"./Form-BeUBWT2I.js";import"./useTextField-BBAHXs5i.js";import"./useFormReset-g9Y9sN6W.js";import"./TextField-VePiy-Wr.js";import"./useEvent-Cyd1cJwZ.js";import"./SelectionManager-DuM_3MOM.js";import"./Switch-DLjbTmVl.js";import"./useToggleState-BP-QwkBT.js";import"./TextFieldBase-lJ9wuUYM.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BJNFa7O1.js";import"./FieldDescription-BTmPq6eh.js";import"./ReactAriaControlledValueFix-BdSr4TbK.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
