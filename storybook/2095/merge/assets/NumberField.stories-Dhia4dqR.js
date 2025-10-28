import{j as r,r as h}from"./iframe-BYlM8TfH.js";import{a as l,u as d,F as u,t as F}from"./Form-CVBWUNQi.js";import{L as o}from"./Label-CObvhZe8.js";import{B as i}from"./Button-DrjwoUCb.js";import{S as x}from"./Section-D4heV61s.js";import{A as j}from"./ActionGroup-D2zlXLO9.js";import{s as p}from"./Action-i4rkq48V.js";import{N as t}from"./NumberField-C2ivvpNS.js";import{F as g}from"./FieldDescription-DcQaW8xO.js";import{F as b}from"./useFieldComponent-BoJq1S9B.js";import"./index-nuYtCEEu.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./browser-D2sPcOVM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-COiWxsLa.js";import"./utils-BDqIfUE7.js";import"./Hidden-CSqzjE-Z.js";import"./IconWarning-WQ4wo7kP.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Dialog-BSP5EDkY.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";import"./dynamic-BhGDraHV.js";import"./getActionGroupSlot-nR5vf13o.js";import"./useStatic-6sdTMqO6.js";import"./context-BILGmIqx.js";import"./ReactAriaControlledValueFix-CJCbwxyd.js";import"./Form-CqmUY9BV.js";import"./Group-Bk1pllsG.js";import"./Input-Dg1gUccH.js";import"./useFormValidation-wBqhYJyj.js";import"./useSpinButton-oJJpBSFw.js";import"./useFormReset-Bl4vFhC1.js";import"./useTextField-SWkzlhtV.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Rr=["Default","WithFieldError","WithFocus"];export{n as Default,m as WithFieldError,a as WithFocus,Rr as __namedExportsOrder,wr as default};
