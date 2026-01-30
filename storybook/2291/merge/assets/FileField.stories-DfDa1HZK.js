import{j as r,r as x}from"./iframe-1hZ9wzBW.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-B4tSpU0s.js";import{L as s}from"./Label-D0cGucr-.js";import{B as t}from"./Button-7Po4DI29.js";import{S}from"./Section-Bc3YMvvr.js";import{A as b}from"./ActionGroup-CGjwNThe.js";import{s as u}from"./Action-5-LJxdMW.js";import{F as m}from"./FileField-CopEcV_i.js";import{F as B}from"./FieldError-BLPNRQRQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BsriuUgB.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./clsx-B-dksMZM.js";import"./index-dx0Fbu95.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./useRef-qfDvHpZ7.js";import"./utils-CnJx27u5.js";import"./ButtonView-DUby8yC0.js";import"./browser-jjcexMIs.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./IconWarning-Bq_05zLs.js";import"./remote-CnwnRZPi.js";import"./Text-BF_GklVB.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./Text-B1mgaTQV.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNGT1V3C.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useFocusable-CvXOfqVX.js";import"./ContextMenuSection-CZDIsfmP.js";import"./Dialog-DTOlRROi.js";import"./RSPContexts-Da-kz4p_.js";import"./OverlayArrow-CJR0hx1K.js";import"./useControlledState-DAXJPifs.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./getActionGroupSlot-BJec6nln.js";import"./useStatic-BSOtV-Rw.js";import"./context-Ci4eovAp.js";import"./useFormValidation-yU8XYtwO.js";import"./FieldError-y4Ibnc6j.js";import"./Input-BD7vx0Sp.js";import"./useFieldComponent-B-hW6CDY.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ar as __namedExportsOrder,qr as default};
