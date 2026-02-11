import{r as y,j as o}from"./iframe-BfVXcSwu.js";import{a as u,u as x,F as j,R as O,S as w,t as g}from"./ResetButton-CMcHrOvU.js";import{L as r}from"./Label-Bd8l-oGM.js";import{B as t}from"./Button-BWaSf0b-.js";import{S as B}from"./Section-D8BWSJOo.js";import{A as C}from"./ActionGroup-BhAYVJgP.js";import{s as f}from"./ActionBatch-CJiux6Y0.js";import{O as n}from"./Option-DJJtvhY6.js";import{C as i}from"./ComboBox-8xFIDtiY.js";import{C as p,a as l}from"./ContextualHelpTrigger-CswBwdyx.js";import{T as c}from"./Text-DuT5OHtj.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{F as E}from"./FieldError-DHMqnFf9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BmLDKJfM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./context-BIORzbvt.js";import"./useRef-sZPdMa_K.js";import"./utils-fXq1spu5.js";import"./ButtonView-ZDfm5U5H.js";import"./browser-6PMbihrp.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./LoadingSpinner-uBvx8mS0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./ContextMenuSection-CkxzJqxG.js";import"./Dialog-DclKvE_W.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./Text-DLMHe2l_.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./VisuallyHidden-CW_0epyS.js";import"./getActionGroupSlot-DFXtDzme.js";import"./useStatic-DbJ3Jck6.js";import"./context-C_1OFCCp.js";import"./Popover-CcjFjnE9.js";import"./useOverlayController-DUljrIWa.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./ListBox-DS7TJHcq.js";import"./DragAndDrop-CnZP26pH.js";import"./inertValue-BNmH59Uq.js";import"./useListState-YR5MP0EE.js";import"./useFieldComponent-CiLN9FTD.js";import"./FieldError-DwfvyaXU.js";import"./Form-BvL7gPGk.js";import"./Group-Cv9HErv5.js";import"./Input-B7Gmgprj.js";import"./useFilter-kshQq6QM.js";import"./useFormValidation-BRgTVkeU.js";import"./useSingleSelectListState-Cm4e_CzI.js";import"./useUpdateEffect-JVrVfy3u.js";import"./useTextField-CN12hJJf.js";import"./useFormReset-bqmCiwf6.js";import"./OverlayTrigger-DRzwAl-J.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),rn={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async b=>{await f(1500),S(b)},F=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:F,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return y.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
        </Field>
        <ComboBox isInvalid>
          <Label>
            Domain
            <ContextualHelpTrigger>
              <Button />
              <ContextualHelp>
                <Text>{dummyText.short}</Text>
              </ContextualHelp>
            </ContextualHelpTrigger>
          </Label>
          <Option>mydomain.de</Option>
          <Option>shop.mydomain.de</Option>
          <Option>anotherdomain.com</Option>
          <Option>www.anotherdomain.com</Option>
          <Option>anotherdomain.com/shop</Option>
          <Option>anotherdomain.com/blog</Option>
          <Option>onemoredomain.de</Option>
          <Option>www.onemoredomain.de</Option>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </ComboBox>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
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
}`,...s.parameters?.docs?.source}}};const tn=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,s as WithFocus,tn as __namedExportsOrder,rn as default};
