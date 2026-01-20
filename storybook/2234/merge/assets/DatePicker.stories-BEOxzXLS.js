import{j as r,r as j}from"./iframe-CG_BDTJg.js";import{b as a,u as p,F as d,t as b}from"./Form-BIGHS7Ny.js";import{L as t}from"./Label-eLDtxB0Y.js";import{R as f,S as h}from"./ResetButton-CGDsV4YZ.js";import{B as u}from"./Button-BmAaiuIV.js";import{S as E}from"./Section-pYf8QOQK.js";import{A as S}from"./ActionGroup-DAmiV-Yk.js";import{s as c}from"./Action-CprlfWDd.js";import{I as l,f as D,K as B}from"./DateInput-lr3Kv7sV.js";import{D as o}from"./DatePicker-CQWKQxIH.js";import{F as g}from"./FieldError-DN7cTCYW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvnWp_K2.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./browser-yLu0BSsR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQ1G_pe6.js";import"./utils-BtbDMhcr.js";import"./Hidden-DdAaT9j3.js";import"./useRef-DbMFXr9W.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./useStatic-CTCSTBly.js";import"./context-CBhRRwo5.js";import"./FieldError-DIhe2pHb.js";import"./Form-LFW5XTCh.js";import"./Group-CxPvNJzw.js";import"./Input-Dsqxq3JD.js";import"./useFormValidation-BBj6R535.js";import"./useFormReset-BbxWwIqr.js";import"./useSpinButton-C9BxDuiy.js";import"./useFilter-BDnVvTV7.js";import"./useFieldComponent-UHV4FB79.js";import"./Popover-C0DY4f9z.js";import"./useOverlayController-t3_U_UCZ.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./RangeCalendar-BKhfUasa.js";import"./Heading-BH9BsmNO.js";import"./useUpdateEffect-D3DdWagp.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),zr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Jr as __namedExportsOrder,zr as default};
