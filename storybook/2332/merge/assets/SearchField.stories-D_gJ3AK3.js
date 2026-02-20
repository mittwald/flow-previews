import{r as S,j as r}from"./iframe-BF3zk0it.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-UxrlNzUI.js";import{L as m}from"./Label-DcRc8bay.js";import{B as d}from"./Button-ZNdemegp.js";import{S as j}from"./Section-CrNjTCEJ.js";import{A as b}from"./ActionGroup-DJsQWQF2.js";import{s as c}from"./ActionBatch-DvnrQlZS.js";import{S as s}from"./SearchField-xOc11WhN.js";import{F as E}from"./FieldError-C2kAtlyK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DMyjxIhV.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./ActionGroupView-DXV0SNwP.js";import"./Content-DDW4skoa.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./RSPContexts-ssfE85JL.js";import"./utils-Ds629Okb.js";import"./Text-C9_U4GIb.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./Modal-CVbQ3im3.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./Overlay-CyMqAfYA.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./LoadingSpinner-BryS_W8u.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./ButtonView-CID7lXee.js";import"./Flex-Box9uTPb.js";import"./useRef-C7wP-y9c.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./useFieldComponent-Z2yLJYUo.js";import"./useControlledHostValueProps-C-DklFre.js";import"./FieldError-WTvIa9hl.js";import"./Form-r-oZJvOh.js";import"./Group-Bhaa4wBz.js";import"./Input-Q6yM49Eu.js";import"./useTextField-CQuzVOOK.js";import"./useFormReset-Dd7cUUSK.js";import"./useFormValidation-Clvn3NKc.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
