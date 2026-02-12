import{r as x,j as r}from"./iframe-DeaTJDua.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-dguijozO.js";import{L as m}from"./Label-DJdPs_mv.js";import{B as l}from"./Button-Cbxy7DVV.js";import{S as j}from"./Section-BH_SD1YF.js";import{A as b}from"./ActionGroup-BydBbbmr.js";import{s as d}from"./ActionBatch-RbyKfuct.js";import{M as s}from"./MarkdownEditor-BRj7_VJS.js";import{F as g}from"./FieldError-1N6EvFt7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-_cZQrmBt.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./clsx-B-dksMZM.js";import"./index-BmNXFkrE.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./context-DpHy2B7Z.js";import"./ActionGroupView-ZKtugs6_.js";import"./Content-CLiYZXIJ.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./RSPContexts-n2YtmRLP.js";import"./utils-DAn_19Le.js";import"./Text-DmX-Z1ax.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";import"./Modal-D3vemkDI.js";import"./Overlay-C4R6Qd88.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./LoadingSpinner-tY2JT6X0.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./VisuallyHidden-BMpCP5yc.js";import"./ButtonView-MbZrvuWF.js";import"./Flex-JXNPn7Yl.js";import"./useRef-DbGYr9ig.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CEBTY825.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./Markdown-DBZ5BnaL.js";import"./CodeBlock-nNYV-SP3.js";import"./CopyButton-p384BHtI.js";import"./Tooltip-C4DC67uQ.js";import"./react-children-utilities-COpQjBYN.js";import"./InlineCode-EzmHe7_J.js";import"./Link-CeQaTb3H.js";import"./Separator-BG4a3hVN.js";import"./TextArea-yLhEKQ7f.js";import"./useFieldComponent-Bk8CgTUl.js";import"./useControlledHostValueProps-BF8eq0rO.js";import"./FieldDescription-B8HCsyh4.js";import"./TextField-Xn26TGA2.js";import"./FieldError-BF0ggQ3i.js";import"./Form-BdU1booJ.js";import"./Group-Dy6AvEDN.js";import"./Input-B9L4_sDl.js";import"./useTextField-DQvvweX9.js";import"./useFormReset-UTIDwNo9.js";import"./useFormValidation-Ca3G17wV.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};
