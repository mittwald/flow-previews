import{j as r,r as h}from"./iframe-9u6Ufs56.js";import{a as p,u as l,F as d,t as F}from"./Form-Vm8WHD7Z.js";import{L as o}from"./Label-D88lgx7Z.js";import{B as i}from"./Button-_dn7QVPB.js";import{S as x}from"./Section-Czu0clYN.js";import{A as j}from"./ActionGroup-CWJ1NwlO.js";import{s as u}from"./Action-M6Kgfb_M.js";import{N as t,p as g,F as b}from"./Modal-DRS8W_HN.js";import"./index-nuYtCEEu.js";import"./dynamic-CQrWC-Om.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./clsx-B-dksMZM.js";import"./index-B3MDoUBn.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./browser-BeFavaxk.js";import"./utils-8ZPSUmH_.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e2U-5o25.js";import"./Text-DBIGrc3m.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./useStatic-DAyA5uHy.js";import"./context-C-QTHw1p.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./ControlledNotification-irCIGaEl.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./LayoutCard-rFftX_5x.js";import"./Accordion-B0i5v90U.js";import"./Alert-BQ8YQR_W.js";import"./AlertIcon-C5b9VCt7.js";import"./AlertBadge-CNA6uKSn.js";import"./Align-8__Vbjw2.js";import"./TableFooterRow-B391BAgL.js";import"./SkeletonText-q8x3n-e-.js";import"./Avatar-C2H-R3m6.js";import"./AvatarStack-D6bPCT5Z.js";import"./Badge-CIynJGVc.js";import"./BigNumber-zhac89k-.js";import"./Breadcrumb-6vQEAbHW.js";import"./Link-Brltyk4S.js";import"./Heading-3nkwrjYk.js";import"./Legend-DEpFCRHA.js";import"./FileCardList-BaVbzUxM.js";import"./Image-B9Cscj9i.js";import"./CodeBlock-BiC9piZk.js";import"./CopyButton-B9mW4h-U.js";import"./Tooltip-BKgm2KH6.js";import"./react-children-utilities-B8hFFp2J.js";import"./Color-CZ1w209L.js";import"./Content-De6yv-na.js";import"./ContextualHelpTrigger-nxMOucmM.js";import"./CounterBadge-KUrZxjtT.js";import"./DonutChart-ClsX_6Hx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CMdk7KOR.js";import"./Header-B-ndv2TP.js";import"./Initials-CPfqnq7b.js";import"./InlineCode-RQOLEMSt.js";import"./LabeledValue-B3MQdaw0.js";import"./PopoverTrigger-CUVq5mS7.js";import"./Markdown-AKsw2lGU.js";import"./Separator-BA2h878Y.js";import"./Message-jo39yurl.js";import"./MessageSeparator-DSUYeihd.js";import"./NavigationGroup-C2BtXn54.js";import"./Notification-CrQoxCY-.js";import"./NotificationProvider-DwOg9r8C.js";import"./ProgressBar-DFtsm5DE.js";import"./Rating-DgNl63vx.js";import"./Skeleton-Bq2Z_NYu.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),oe={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async f=>{await u(1500),y(f)},c=l({defaultValues:{ageDefaultValue:36}}),m=F();return r.jsx(d,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(m,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...a.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,a as WithFocus,te as __namedExportsOrder,oe as default};
