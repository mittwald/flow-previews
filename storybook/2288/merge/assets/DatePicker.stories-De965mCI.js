import{j as r,r as j}from"./iframe-BUwXHbLV.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DD2EU88j.js";import{L as t}from"./Label-VcTz9-oy.js";import{B as u}from"./Button-C47X2BbH.js";import{S as E}from"./Section-DvLGNmum.js";import{A as S}from"./ActionGroup-B01MVWJe.js";import{s as c}from"./Action-Wt0sSzk-.js";import{I as l,f as D,K as B}from"./DateInput-LkH5w47u.js";import{D as o}from"./DatePicker-CKv6g2ho.js";import{F as g}from"./FieldError-BFYCcyQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-jPtu3qAR.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./clsx-B-dksMZM.js";import"./index-B1fishDV.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./useRef-BrSocotX.js";import"./utils-JDwP1GoF.js";import"./ButtonView-DumfpSry.js";import"./browser-DgSxuaKY.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./Text-DQHJUI0D.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcgTA6VC.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Dialog-2n0yrNbm.js";import"./RSPContexts-CfLLQl4G.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./useStatic-BtWsPYN-.js";import"./context-BtwGTzrQ.js";import"./FieldError-DDJD7LnR.js";import"./Form-D0DN8V4Z.js";import"./Group-BwNIZrev.js";import"./Input-NxVda43d.js";import"./useFormValidation-GMJFkgaI.js";import"./useFormReset-juEzhCU8.js";import"./useSpinButton-BVdjzVUW.js";import"./useFilter-CMNv9mJg.js";import"./useFieldComponent-NdCAuKiZ.js";import"./Popover-DKz-OvIj.js";import"./useOverlayController-Dogh-DtE.js";import"./OverlayContextProvider-CQG9zk-L.js";import"./RangeCalendar-A9S7LLSw.js";import"./Heading-Bx_NYZMu.js";import"./useUpdateEffect-WgRKpj9M.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
