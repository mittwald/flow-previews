import{j as r,r as x}from"./iframe-Bqcpbrss.js";import{b as a,u as p,F as d,t as j}from"./Form-BQQ7mOby.js";import{L as t}from"./Label-DkmPPtXy.js";import{R as u,S as F}from"./ResetButton-YxixX2pb.js";import{B as l}from"./Button-Cnlerii9.js";import{S as b}from"./Section-Bc1hD-fo.js";import{A as E}from"./ActionGroup-6G6paD9M.js";import{s as c}from"./Action-B2JQUsel.js";import{L as S}from"./DateInput-CPId3vbj.js";import{T as o}from"./TimeField-CDTLeL6F.js";import{F as T}from"./FieldError-B_AiZFnH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dekqokaj.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./browser-C4ue27yU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B1GY4ZIq.js";import"./utils-BJedWkRC.js";import"./Hidden-BSWGkYgd.js";import"./useRef-DUppCNf-.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./Text-BTcvwTq1.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./LoadingSpinner-CCDMAFHO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./ContextMenuSection-C08RkJTE.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./useStatic-DxBp64zy.js";import"./context-ChzSVWNL.js";import"./FieldError-DLGH1zeP.js";import"./Form-CNSKTjy-.js";import"./Group-CL0L_n-j.js";import"./Input-RoH5kbBf.js";import"./useFormValidation-D7KvBPrT.js";import"./useFormReset-BuAWhlth.js";import"./useSpinButton-D-ogGRRE.js";import"./useFilter-Dfx4ZPTv.js";import"./useFieldComponent-CI3p7oBW.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,kr as __namedExportsOrder,$r as default};
