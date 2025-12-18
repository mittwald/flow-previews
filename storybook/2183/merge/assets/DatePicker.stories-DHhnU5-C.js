import{j as r,r as j}from"./iframe-Bqcpbrss.js";import{b as a,u as d,F as p,t as b}from"./Form-BQQ7mOby.js";import{L as t}from"./Label-DkmPPtXy.js";import{R as f,S as h}from"./ResetButton-YxixX2pb.js";import{B as u}from"./Button-Cnlerii9.js";import{S as E}from"./Section-Bc1hD-fo.js";import{A as S}from"./ActionGroup-6G6paD9M.js";import{s as c}from"./Action-B2JQUsel.js";import{I as l,f as D,K as B}from"./DateInput-CPId3vbj.js";import{D as o}from"./DatePicker-CzV_48lO.js";import{F as g}from"./FieldError-B_AiZFnH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dekqokaj.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./browser-C4ue27yU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B1GY4ZIq.js";import"./utils-BJedWkRC.js";import"./Hidden-BSWGkYgd.js";import"./useRef-DUppCNf-.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./Text-BTcvwTq1.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./LoadingSpinner-CCDMAFHO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./ContextMenuSection-C08RkJTE.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./useStatic-DxBp64zy.js";import"./context-ChzSVWNL.js";import"./FieldError-DLGH1zeP.js";import"./Form-CNSKTjy-.js";import"./Group-CL0L_n-j.js";import"./Input-RoH5kbBf.js";import"./useFormValidation-D7KvBPrT.js";import"./useFormReset-BuAWhlth.js";import"./useSpinButton-D-ogGRRE.js";import"./useFilter-Dfx4ZPTv.js";import"./useFieldComponent-CI3p7oBW.js";import"./Popover-BzwM4JMX.js";import"./useOverlayController-b38M5Zqz.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./RangeCalendar-C_U8DI5Y.js";import"./Heading-BNK1YdHX.js";import"./useUpdateEffect-y23VDScM.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
