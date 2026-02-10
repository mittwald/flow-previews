import{r as x,j as r}from"./iframe-BAXQY30e.js";import{a as n,u as a,F as p,R as u,S as c,t as E}from"./ResetButton-D0JxP27a.js";import{L as s}from"./Label-DhF_BRrp.js";import{B as l}from"./Button-CvDqM7Lu.js";import{S as j}from"./Section-BVe0LGVq.js";import{A as b}from"./ActionGroup-BudZkh0v.js";import{s as d}from"./Action-CDH3oaiQ.js";import{M as m}from"./MarkdownEditor-BU41O_zY.js";import{F as g}from"./FieldError-D1QPRlMW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0Mu-qEnq.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./useRef-DMh8YqdE.js";import"./utils-CPq9a2_3.js";import"./ButtonView-DderywPS.js";import"./browser-7M05TLI2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-0WoXV1eK.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useFocusable-B7f7k6Nb.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./getActionGroupSlot-CKOsA57z.js";import"./useStatic-rplOn2Qs.js";import"./context-DKCDV3-b.js";import"./Markdown-Dnx-ZqB5.js";import"./CodeBlock-CDmEPAgr.js";import"./CopyButton-DEnuM8mh.js";import"./Tooltip-1P8nbn9B.js";import"./react-children-utilities-CYakpWqM.js";import"./Heading-B7OcLMTv.js";import"./Heading-o5Ph-k-z.js";import"./InlineCode-eB_5JKai.js";import"./Link-CMQ5K8Q-.js";import"./Separator-BlRVJDhU.js";import"./TextArea-Br6_iVjb.js";import"./useFieldComponent-RBMXOPsB.js";import"./useControlledHostValueProps-CmFn52YM.js";import"./FieldDescription-LY8oqjwS.js";import"./TextField-CuJT36W8.js";import"./FieldError-RUpMVejq.js";import"./Form-CMcE9GN0.js";import"./Group-DP8yEYC_.js";import"./Input-Dt_0h10s.js";import"./useTextField-1DppJzBw.js";import"./useFormReset-CqoQKslx.js";import"./useFormValidation-DAvMLm6e.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
