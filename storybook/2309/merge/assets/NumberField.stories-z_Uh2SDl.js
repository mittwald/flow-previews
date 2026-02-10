import{r as x,j as r}from"./iframe-CnD5cTjE.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-DR2uAWq7.js";import{L as o}from"./Label-BZkRYtAq.js";import{B as p}from"./Button-CxHLWJvy.js";import{S as g}from"./Section-Bk8f4Pnr.js";import{A as b}from"./ActionGroup-D3QUuhXI.js";import{s as u}from"./Action-DYL0-s8C.js";import{N as t}from"./NumberField-CQ1mU9FX.js";import{F as E}from"./FieldDescription-rFjAs_3m.js";import{F as S}from"./FieldError-D8deZX0S.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DmWwIwdY.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./clsx-B-dksMZM.js";import"./index-DPBNH-jw.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./useRef-DVW0JPmG.js";import"./utils-BYl_EWK3.js";import"./ButtonView-Dbti4Nd6.js";import"./browser-DH0afsgD.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./Text-Bqsx-GQX.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgDG_638.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useFocusable-DUJmCsdq.js";import"./ContextMenuSection-BY-0yvA1.js";import"./Dialog-BpNR7iRs.js";import"./RSPContexts-AjJzFs_t.js";import"./OverlayArrow-W0sikX14.js";import"./useControlledState-C-7lgoXp.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./useStatic-CR0dXYGS.js";import"./context-CRbXRYLt.js";import"./useFieldComponent-D1uM9aif.js";import"./useControlledHostValueProps-DEvY5VUA.js";import"./FieldError-CkgMvR4A.js";import"./Form-Bj2UuDao.js";import"./Group-CgvC6BGS.js";import"./Input-D96XXoVS.js";import"./useFormValidation-0N4lg69R.js";import"./useSpinButton-ZpMMk--w.js";import"./useFormReset-DzGHPNTd.js";import"./useTextField-B2O_v1I6.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
