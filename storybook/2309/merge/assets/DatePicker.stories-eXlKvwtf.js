import{r as j,j as r}from"./iframe-CnD5cTjE.js";import{a,u as p,F as d,R as f,S as h,t as b}from"./ResetButton-DR2uAWq7.js";import{L as t}from"./Label-BZkRYtAq.js";import{B as u}from"./Button-CxHLWJvy.js";import{S as E}from"./Section-Bk8f4Pnr.js";import{A as S}from"./ActionGroup-D3QUuhXI.js";import{s as c}from"./Action-DYL0-s8C.js";import{I as l,f as D,K as B}from"./DateInput-CWXnVHSd.js";import{D as o}from"./DatePicker-DI0W49Uf.js";import{F as g}from"./FieldError-D8deZX0S.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DmWwIwdY.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./clsx-B-dksMZM.js";import"./index-DPBNH-jw.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./useRef-DVW0JPmG.js";import"./utils-BYl_EWK3.js";import"./ButtonView-Dbti4Nd6.js";import"./browser-DH0afsgD.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./Text-Bqsx-GQX.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgDG_638.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useFocusable-DUJmCsdq.js";import"./ContextMenuSection-BY-0yvA1.js";import"./Dialog-BpNR7iRs.js";import"./RSPContexts-AjJzFs_t.js";import"./OverlayArrow-W0sikX14.js";import"./useControlledState-C-7lgoXp.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./useStatic-CR0dXYGS.js";import"./context-CRbXRYLt.js";import"./FieldError-CkgMvR4A.js";import"./Form-Bj2UuDao.js";import"./Group-CgvC6BGS.js";import"./Input-D96XXoVS.js";import"./useFormReset-DzGHPNTd.js";import"./useFormValidation-0N4lg69R.js";import"./useSpinButton-ZpMMk--w.js";import"./useFilter-DNI0b_aQ.js";import"./useFieldComponent-D1uM9aif.js";import"./Popover-BNLVWps9.js";import"./useOverlayController-DeY3Y9Ly.js";import"./OverlayContextProvider-CWXPLkIC.js";import"./RangeCalendar-DV7xK5oq.js";import"./Heading-BVBd8bpC.js";import"./useUpdateEffect-BoPpJliP.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
