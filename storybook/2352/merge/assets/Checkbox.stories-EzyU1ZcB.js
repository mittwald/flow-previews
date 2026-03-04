import{r as x,j as r}from"./iframe-CwpToEZy.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-BvevyXvN.js";import{B as d}from"./Button-Cw2xgR_6.js";import{S as j}from"./Section-C5Yt0rDG.js";import{A as b}from"./ActionGroup-Cke5umNz.js";import{s as u}from"./ActionBatch-DcvnwnMD.js";import{C as t}from"./Checkbox-C5EzOca7.js";import{F as E}from"./FieldError-P_YSxT2d.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfOleVAa.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./ActionGroupView-BEWtiWZf.js";import"./Content-04TsN1VN.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./RSPContexts-DAz7wbZz.js";import"./utils-3nROwXn_.js";import"./Text-DRk3V-Fm.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./Modal-09gASXkd.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./Overlay-B3hqAdST.js";import"./OverlayContextProvider-CBORYkOm.js";import"./LoadingSpinner-CN3jmE_K.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./ButtonView-EQ3fadJN.js";import"./Flex-DxGhnD35.js";import"./useRef-Oq-jnguU.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./getActionGroupSlot-DtR43x--.js";import"./useFieldComponent-CneqxYGw.js";import"./FieldError-BoYVEB6S.js";import"./Form-Di0COYqU.js";import"./useFormValidation-pFRcrJM7.js";import"./useToggleState-Doj7UKiV.js";import"./useFormReset-BARG9uBg.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
