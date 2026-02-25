import{r as x,j as r}from"./iframe-DG8PGYI2.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-BMqJhTJD.js";import{L as t}from"./Label-BPpS4vmA.js";import{B as l}from"./Button-DsdihroW.js";import{S as b}from"./Section-Da7bIBGb.js";import{A as E}from"./ActionGroup-CyRYJEmZ.js";import{s as c}from"./ActionBatch-BRiItlo9.js";import{L as S}from"./DateInput-r4FsLeXL.js";import{T as o}from"./TimeField-D_hAg3ys.js";import{F as T}from"./FieldError-Cib7Ob9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BkMen_On.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./ActionGroupView-CyN-fLB9.js";import"./Content-CXy-CNoO.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./RSPContexts-DatC1hy5.js";import"./utils-07AIACoX.js";import"./Text-DXfg_t75.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./Modal-D9mRgYws.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./Overlay-BBbCl7H6.js";import"./OverlayContextProvider-DoYhYc18.js";import"./LoadingSpinner-JP8g8ixs.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./ButtonView-BM2ZoM3D.js";import"./Flex-zawCEP1d.js";import"./useRef-DIQYbD7f.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BKYmu9Je.js";import"./getActionGroupSlot-D51i84O1.js";import"./FieldError-bE1Vz7Na.js";import"./Form-COtDtsRb.js";import"./Group-DnR8HzPq.js";import"./Input-8qA1kF5u.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./useSpinButton-CJfrx6m5.js";import"./useFilter-D1xH6Liy.js";import"./useFieldComponent-CBicToer.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
