import{r as x,j as r}from"./iframe-jaoHr1AV.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DAPnXDhG.js";import{B as d}from"./Button-DsyAZnvz.js";import{S as j}from"./Section-D5fyzIcp.js";import{A as b}from"./ActionGroup-BMyaLsc1.js";import{s as u}from"./ActionBatch-Dl5Fmp7w.js";import{C as t}from"./Checkbox-C04oqOwJ.js";import{F as E}from"./FieldError-SYu40l7i.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BZQIArQs.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./clsx-B-dksMZM.js";import"./index-BFCtAlHX.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./ActionGroupView-DUyubtpm.js";import"./Content-CP7dqr2s.js";import"./Heading-BypYnbKw.js";import"./Heading-CGZUJUiQ.js";import"./RSPContexts-CUx4KoIL.js";import"./utils-CQw042JL.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./Modal-B8CAdwBg.js";import"./useOverlayController-CzdtfrCF.js";import"./useStatic-CMyMNZPZ.js";import"./Overlay-B6aX1fvL.js";import"./OverlayContextProvider-CEARkGE9.js";import"./LoadingSpinner-DQaYydFO.js";import"./IconWarning-DyIA4Uof.js";import"./remote-CF-AY8I2.js";import"./Dialog-COvhX_CP.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-WaW8O6jQ.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocusable-Bnc4O4Ay.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./ButtonView-DldKei58.js";import"./Flex-MfsvjoaP.js";import"./useRef-Fb7B-TJZ.js";import"./ContextMenuSection-BSB41Hhw.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./useFieldComponent-D-iYVveA.js";import"./FieldError-D7CvISHf.js";import"./Form-B8e0R8nB.js";import"./useFormValidation-B1svUyZM.js";import"./useToggleState-CJDI7_rY.js";import"./useFormReset-B3LvCMGn.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
