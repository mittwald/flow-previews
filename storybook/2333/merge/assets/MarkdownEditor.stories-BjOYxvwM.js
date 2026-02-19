import{r as x,j as r}from"./iframe-CaMmm6JB.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-DZiVofRK.js";import{L as m}from"./Label-7z5ZqOim.js";import{B as l}from"./Button-Ccdb4ZyB.js";import{S as j}from"./Section-z5Dz65CL.js";import{A as b}from"./ActionGroup-C2ezmeu7.js";import{s as d}from"./ActionBatch-Q41d4eeq.js";import{M as s}from"./MarkdownEditor-BJ4yt6UV.js";import{F as g}from"./FieldError-gBRSHyIP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCT0rfWD.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./ActionGroupView-SXd6Ahs2.js";import"./Content-D39bfGls.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./RSPContexts-HzcDbyvj.js";import"./utils-BWel_6vJ.js";import"./Text-BytpHB1v.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./Modal-D-BKA9RG.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./Overlay-DFrCfT03.js";import"./OverlayContextProvider-_LkIzv60.js";import"./LoadingSpinner-D3IBMWR2.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./ButtonView-VN2wxJGS.js";import"./Flex-BB0MY87d.js";import"./useRef-6651uh8r.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CGa5WiYd.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./Markdown-DnT3RmI_.js";import"./CodeBlock-BkBzAyW2.js";import"./CopyButton-CaWC6c4X.js";import"./Tooltip-Dc9CQwro.js";import"./react-children-utilities-Cq_ggl1Z.js";import"./InlineCode-B68IMgG9.js";import"./Link-DkYjPJkt.js";import"./Separator-Dvuu9VXQ.js";import"./TextArea-kEU1UQ0W.js";import"./useFieldComponent-l9GEjfOW.js";import"./useControlledHostValueProps-CqHjqxx6.js";import"./FieldDescription-ZK4hQ0pT.js";import"./TextField-CfcKWnss.js";import"./FieldError-rN2a2i1l.js";import"./Form-DUaYRZYC.js";import"./Group-CbQ0bY4b.js";import"./Input-BR-ykejl.js";import"./useTextField-Cus2TleU.js";import"./useFormReset-B22K348z.js";import"./useFormValidation-BBrrlMUS.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
