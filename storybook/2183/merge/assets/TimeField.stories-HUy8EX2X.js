import{j as r,r as x}from"./iframe-BXRQqxRF.js";import{u as p,F as a}from"./Form-DX4KpEqW.js";import{L as o}from"./Label-Dw-KVlkl.js";import{F as d,t as j}from"./Field-DoKu5q0S.js";import{B as l}from"./Button-C0lHC6Ss.js";import{S as b}from"./Section-o_ikZ1pf.js";import{A as E}from"./ActionGroup-CBAIlTo2.js";import{s as c}from"./Action-Co1N5x-Q.js";import{K as S}from"./DateInput-BCn9NVYh.js";import{T as t}from"./TimeField-Cqqvbjdj.js";import{F as T}from"./FieldError-B377POAw.js";import{R as u}from"./ResetButton-nNJpj6Ef.js";import{S as F}from"./SubmitButton-DOYZAAXH.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-JidmR7ov.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./Label-x3iOqkWL.js";import"./utils-W_wb_I6t.js";import"./Hidden-CXQdbF07.js";import"./dynamic-CLAkwN-B.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./Text-KdIVkcjD.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DlzDIGUo.js";import"./ProgressBar-Bu0Rvbqr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./ContextMenuSection-CcbfbV9b.js";import"./lib-90ocxLs-.js";import"./Dialog-CBkTvNeJ.js";import"./RSPContexts-DBwrNRvT.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useControlledState-DF5Prxi4.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./useStatic-CDs84s8f.js";import"./context-BJK7zy3l.js";import"./FieldError-Cw_rtSeq.js";import"./Form-k8rVjsdW.js";import"./Group-C8fsqvgi.js";import"./Input-COh9rz8g.js";import"./useFormValidation-tPOMEO92.js";import"./useFormReset-BZsjU1hv.js";import"./useSpinButton-CpO6HIfL.js";import"./useFilter-n9kODX6T.js";import"./useFieldComponent-y0XT-9Ew.js";import"./IconDanger-B1opIkZE.js";import"./useRef-C3fqYXg-.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
