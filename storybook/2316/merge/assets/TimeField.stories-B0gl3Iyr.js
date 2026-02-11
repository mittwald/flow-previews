import{r as x,j as r}from"./iframe-Cq8OhOqi.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-e0wuYo_a.js";import{L as t}from"./Label-D-4zWGkt.js";import{B as l}from"./Button-BU-3gGXz.js";import{S as b}from"./Section-CsWsO61m.js";import{A as E}from"./ActionGroup-DpnZ5B3u.js";import{s as c}from"./Action-CjFX3pKp.js";import{L as S}from"./DateInput-CkIWqF73.js";import{T as o}from"./TimeField-BymAadmf.js";import{F as T}from"./FieldError-2IpGOPbh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fC-Lgr30.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./useRef-By8gWJdj.js";import"./utils-Bubk6yJw.js";import"./ButtonView-D9mwnSmq.js";import"./browser-D1jWek88.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Dialog-BglVjZuh.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./useStatic-Dv08VHAH.js";import"./context-DR72ScyD.js";import"./FieldError-BGnsbaLE.js";import"./Form-B1CYZolU.js";import"./Group-CJEr304M.js";import"./Input-DDTw6Vbr.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./useSpinButton-CAJl68ds.js";import"./useFilter-Br2nHeU-.js";import"./useFieldComponent-BYb5VnRy.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
