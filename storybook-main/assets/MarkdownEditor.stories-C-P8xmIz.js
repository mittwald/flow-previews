import{j as r,r as h}from"./iframe-DO9N3msj.js";import{a as p,u as a,F as d,t as F}from"./Form-LlePpoBk.js";import{L as s}from"./Label-DMT-VAeC.js";import{B as m}from"./Button-DK3gLuJ3.js";import{S as x}from"./Section-CAvq1-xC.js";import{A as E}from"./ActionGroup-BuBCswp0.js";import{s as l}from"./Action-DxmtjQUu.js";import{m as n,F as j}from"./Modal-BlwfBR27.js";import"./index-nuYtCEEu.js";import"./dynamic-DUGX_GEz.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./clsx-B-dksMZM.js";import"./index-BKd7rs_c.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./context-BjTRJu3f.js";import"./browser-hD6iDIbH.js";import"./utils-Cu-DyEOs.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BWr56wBK.js";import"./Text-D7GNIHqq.js";import"./EmulatedBoldText-CL2lsqyO.js";import"./LoadingSpinner-k8RqOHze.js";import"./Button-CwTEoZMR.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./Dialog-D3dWmtLO.js";import"./RSPContexts-dbdihzDr.js";import"./OverlayArrow-01aTrBGz.js";import"./useControlledState-1ES4-sD1.js";import"./Collection-BqBfIbeS.js";import"./CollectionBuilder-DBX3bBv7.js";import"./SelectionIndicator-BhMymJwE.js";import"./Separator-BF-SYlg1.js";import"./getActionGroupSlot-B34s0y1B.js";import"./useStatic-KZCckyWk.js";import"./context-CvI_nrYK.js";import"./Popover-CJ5gJoTU.js";import"./OverlayTrigger-Cc6aFNNE.js";import"./ControlledNotification-ChKUqlSP.js";import"./ClearPropsContextView-ClFJoQqW.js";import"./LayoutCard-BaL3uirn.js";import"./Accordion-DiNCZdh5.js";import"./Alert-CmVL1g9g.js";import"./AlertIcon-Cx9uM7rV.js";import"./AlertBadge-DKjjsjX1.js";import"./Align-4_9gR0EM.js";import"./TableFooterRow-CzNLyIYu.js";import"./SkeletonText-BzkksMdG.js";import"./Avatar-C8iI4XiR.js";import"./AvatarStack-5WxBj_Sw.js";import"./Badge-Dmk1cXNb.js";import"./BigNumber-BS_a1J_z.js";import"./Breadcrumb-DD7mAzkx.js";import"./Link-CUTcgav-.js";import"./Heading-DFXUXxT1.js";import"./Legend-kDyzBG5k.js";import"./FileCardList-CaIzS8B1.js";import"./Image-BQG4Mi23.js";import"./CodeBlock-IrVB4jA5.js";import"./CopyButton-D3R6S7E2.js";import"./Tooltip-CV32lKRB.js";import"./react-children-utilities-CCLuUO2m.js";import"./Color-Cq7q7xUW.js";import"./Content-o-E4J5v4.js";import"./ContextualHelpTrigger-DSsVPekU.js";import"./CounterBadge-BIZ0CqA0.js";import"./DonutChart-D-AmBtnm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bhlpa0-Q.js";import"./Header-Drz2V-xS.js";import"./Initials-95Z312bE.js";import"./InlineCode-CitufoKJ.js";import"./LabeledValue-DKTcLtzE.js";import"./PopoverTrigger-Igmj44kF.js";import"./Markdown-BIJUH9sl.js";import"./Separator-C5VUtYu8.js";import"./Message-uGgh4jCd.js";import"./MessageSeparator-BlXPxwBu.js";import"./NavigationGroup-2GwITB1t.js";import"./Notification-Dews6BSm.js";import"./NotificationProvider-EITiwGaZ.js";import"./ProgressBar-D0iIlwlS.js";import"./Rating-G-_Wb1CJ.js";import"./Skeleton-X_AsFCgX.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
