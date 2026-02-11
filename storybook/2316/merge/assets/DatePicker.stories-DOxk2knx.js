import{r as j,j as r}from"./iframe-Cq8OhOqi.js";import{a,u as p,F as d,R as f,S as h,t as b}from"./ResetButton-e0wuYo_a.js";import{L as t}from"./Label-D-4zWGkt.js";import{B as u}from"./Button-BU-3gGXz.js";import{S as E}from"./Section-CsWsO61m.js";import{A as S}from"./ActionGroup-DpnZ5B3u.js";import{s as c}from"./Action-CjFX3pKp.js";import{I as l,f as D,K as B}from"./DateInput-CkIWqF73.js";import{D as o}from"./DatePicker-B5vHL9OH.js";import{F as g}from"./FieldError-2IpGOPbh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fC-Lgr30.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./useRef-By8gWJdj.js";import"./utils-Bubk6yJw.js";import"./ButtonView-D9mwnSmq.js";import"./browser-D1jWek88.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Dialog-BglVjZuh.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./useStatic-Dv08VHAH.js";import"./context-DR72ScyD.js";import"./FieldError-BGnsbaLE.js";import"./Form-B1CYZolU.js";import"./Group-CJEr304M.js";import"./Input-DDTw6Vbr.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./useSpinButton-CAJl68ds.js";import"./useFilter-Br2nHeU-.js";import"./useFieldComponent-BYb5VnRy.js";import"./Popover-CtLlX21S.js";import"./useOverlayController-D3DcD62Z.js";import"./OverlayContextProvider-BKoB-iKb.js";import"./RangeCalendar-Drdlqxeo.js";import"./Heading-CPXM0mEb.js";import"./useUpdateEffect-BPTBaaPd.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
