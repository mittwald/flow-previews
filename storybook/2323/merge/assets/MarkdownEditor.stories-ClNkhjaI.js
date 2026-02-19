import{r as x,j as r}from"./iframe-Bvl8-Rhq.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-C3zAOGNm.js";import{L as m}from"./Label-BVY1ryMc.js";import{B as l}from"./Button-_6nTdRI5.js";import{S as j}from"./Section-oIxjsMS9.js";import{A as b}from"./ActionGroup-vTKVeA17.js";import{s as d}from"./ActionBatch-TusZCIcz.js";import{M as s}from"./MarkdownEditor-QMCMp6oq.js";import{F as g}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./Overlay-CgTeHkhl.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./utils-D7QihGpD.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./Text-BaIKemC9.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ActionGroupView-CTEFX79v.js";import"./Content-twBtn99c.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./Text-CBdBop4j.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Modal-DJXXBtnB.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./getActionGroupSlot-ConeELan.js";import"./Markdown-CFqPCCne.js";import"./CodeBlock-Cy_tGZXl.js";import"./CopyButton-CWw1h9Iu.js";import"./Tooltip-DBIcQ75K.js";import"./react-children-utilities-rQzUtuYf.js";import"./InlineCode-BAxL-5Qm.js";import"./Link-DA5wd4vL.js";import"./Separator-D09kTWQl.js";import"./TextArea-Bx4XH2nw.js";import"./useFieldComponent-D4BbqCv_.js";import"./useControlledHostValueProps-BVnBHhop.js";import"./FieldDescription-BZOs9e_4.js";import"./TextField-Bw9AZxi0.js";import"./FieldError-Du4MQwEm.js";import"./Form-D70wz7aV.js";import"./Group-CdqV-_AW.js";import"./Input-DnkGytYm.js";import"./useTextField-CDBuSrx8.js";import"./useFormReset-C0JkbMmh.js";import"./useFormValidation-Cl3HF3fr.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
