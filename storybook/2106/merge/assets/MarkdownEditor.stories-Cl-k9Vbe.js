import{j as r,r as h}from"./iframe-9u6Ufs56.js";import{a as p,u as a,F as d,t as F}from"./Form-Vm8WHD7Z.js";import{L as s}from"./Label-D88lgx7Z.js";import{B as m}from"./Button-_dn7QVPB.js";import{S as x}from"./Section-Czu0clYN.js";import{A as E}from"./ActionGroup-CWJ1NwlO.js";import{s as l}from"./Action-M6Kgfb_M.js";import{m as n,F as j}from"./Modal-DRS8W_HN.js";import"./index-nuYtCEEu.js";import"./dynamic-CQrWC-Om.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./clsx-B-dksMZM.js";import"./index-B3MDoUBn.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./browser-BeFavaxk.js";import"./utils-8ZPSUmH_.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e2U-5o25.js";import"./Text-DBIGrc3m.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./useStatic-DAyA5uHy.js";import"./context-C-QTHw1p.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./ControlledNotification-irCIGaEl.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./LayoutCard-rFftX_5x.js";import"./Accordion-B0i5v90U.js";import"./Alert-BQ8YQR_W.js";import"./AlertIcon-C5b9VCt7.js";import"./AlertBadge-CNA6uKSn.js";import"./Align-8__Vbjw2.js";import"./TableFooterRow-B391BAgL.js";import"./SkeletonText-q8x3n-e-.js";import"./Avatar-C2H-R3m6.js";import"./AvatarStack-D6bPCT5Z.js";import"./Badge-CIynJGVc.js";import"./BigNumber-zhac89k-.js";import"./Breadcrumb-6vQEAbHW.js";import"./Link-Brltyk4S.js";import"./Heading-3nkwrjYk.js";import"./Legend-DEpFCRHA.js";import"./FileCardList-BaVbzUxM.js";import"./Image-B9Cscj9i.js";import"./CodeBlock-BiC9piZk.js";import"./CopyButton-B9mW4h-U.js";import"./Tooltip-BKgm2KH6.js";import"./react-children-utilities-B8hFFp2J.js";import"./Color-CZ1w209L.js";import"./Content-De6yv-na.js";import"./ContextualHelpTrigger-nxMOucmM.js";import"./CounterBadge-KUrZxjtT.js";import"./DonutChart-ClsX_6Hx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CMdk7KOR.js";import"./Header-B-ndv2TP.js";import"./Initials-CPfqnq7b.js";import"./InlineCode-RQOLEMSt.js";import"./LabeledValue-B3MQdaw0.js";import"./PopoverTrigger-CUVq5mS7.js";import"./Markdown-AKsw2lGU.js";import"./Separator-BA2h878Y.js";import"./Message-jo39yurl.js";import"./MessageSeparator-DSUYeihd.js";import"./NavigationGroup-C2BtXn54.js";import"./Notification-CrQoxCY-.js";import"./NotificationProvider-DwOg9r8C.js";import"./ProgressBar-DFtsm5DE.js";import"./Rating-DgNl63vx.js";import"./Skeleton-Bq2Z_NYu.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
