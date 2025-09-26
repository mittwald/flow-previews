import{j as e}from"./iframe-Dp_ptgTO.js";import{A as j}from"./ActionGroup--8bt1U9u.js";import{B as p}from"./Button-Bm7Tf187.js";import{L as t}from"./Label-Bfe7G6ov.js";import{S as f}from"./Section-Ct02y9-D.js";import{T as o}from"./TextField-B1nrVQIO.js";import{a as V,u as b,F,t as S}from"./Form-ByP6LItT.js";import{s as g}from"./Action-D8BJShfM.js";import"./index-Cun1SEai.js";import"./dynamic-N86xW7wt.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DyRiGzXE.js";import"./useStatic-m8l0C_TU.js";import"./IconWarning-CESkhJY3.js";import"./Text-DKCpryII.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";import"./Text--dlrpEAx.js";import"./utils-jLhJmKpa.js";import"./LoadingSpinner-CO7k3E9d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./context-dvnbYm3m.js";import"./Button-CtqZigcv.js";import"./ProgressBar-DMXo3Oxb.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CuGJ_WBQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgTBEQGy.js";import"./useFocus-BGDVbxBE.js";import"./useFocusRing-MWP1ZcQm.js";import"./useFocusable-Pd3lvrKn.js";import"./ContextMenuSection-DtLQL4-Q.js";import"./Popover-CLhZGReB.js";import"./DialogTriggerView-VHLYNpVx.js";import"./context-DDTw2-bn.js";import"./RSPContexts-B9nFdFkt.js";import"./ClearPropsContextView-BbJozVRy.js";import"./useControlledState-rqltzUWl.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./CollectionBuilder-D4MRH1wH.js";import"./context-DhKk3IGs.js";import"./Separator-BGudjOFK.js";import"./SelectionManager-BktYLEMf.js";import"./useEvent-BAkCuTus.js";import"./Switch-BhZFtZ7l.js";import"./useToggleState-BTLQo5Y8.js";import"./useFormReset-CqaGS40P.js";import"./TextFieldBase-BoV6C2jF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BlMfL7YS.js";import"./FieldError-Izh2_fYp.js";import"./FieldDescription-_sE_f3No.js";import"./TextField-BJgtSOFG.js";import"./Form-v2gdHsY3.js";import"./Group-D-YhKZJB.js";import"./Input-ma6DJJKp.js";import"./useTextField-_OLRvzuM.js";import"./useFormValidation-CyColpPY.js";import"./ReactAriaControlledValueFix-lEod25kb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ie=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ie as __namedExportsOrder,Ge as default};
