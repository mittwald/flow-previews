import{r as x,j as r}from"./iframe-BF3zk0it.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-UxrlNzUI.js";import{B as d}from"./Button-ZNdemegp.js";import{S as j}from"./Section-CrNjTCEJ.js";import{A as b}from"./ActionGroup-DJsQWQF2.js";import{s as u}from"./ActionBatch-DvnrQlZS.js";import{C as t}from"./Checkbox-wHuboW44.js";import{F as E}from"./FieldError-C2kAtlyK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DMyjxIhV.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./ActionGroupView-DXV0SNwP.js";import"./Content-DDW4skoa.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./RSPContexts-ssfE85JL.js";import"./utils-Ds629Okb.js";import"./Text-C9_U4GIb.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./Modal-CVbQ3im3.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./Overlay-CyMqAfYA.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./LoadingSpinner-BryS_W8u.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./ButtonView-CID7lXee.js";import"./Flex-Box9uTPb.js";import"./useRef-C7wP-y9c.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./useFieldComponent-Z2yLJYUo.js";import"./FieldError-WTvIa9hl.js";import"./Form-r-oZJvOh.js";import"./useFormValidation-Clvn3NKc.js";import"./useToggleState-ZrzPMdJs.js";import"./useFormReset-Dd7cUUSK.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
