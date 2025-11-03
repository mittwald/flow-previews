import{j as r,r as j}from"./iframe-9u6Ufs56.js";import{u as d,F as u,t as g,a as h}from"./Form-Vm8WHD7Z.js";import{B as i}from"./Button-_dn7QVPB.js";import{S as b}from"./Section-Czu0clYN.js";import{A as E}from"./ActionGroup-CWJ1NwlO.js";import{s as f}from"./Action-M6Kgfb_M.js";import{A as m,T as l,F as S,O as T}from"./Modal-DRS8W_HN.js";import{L as a}from"./Label-D88lgx7Z.js";import"./index-nuYtCEEu.js";import"./dynamic-CQrWC-Om.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./clsx-B-dksMZM.js";import"./index-B3MDoUBn.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./browser-BeFavaxk.js";import"./utils-8ZPSUmH_.js";import"./IconWarning-e2U-5o25.js";import"./Text-DBIGrc3m.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./useStatic-DAyA5uHy.js";import"./context-C-QTHw1p.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./ControlledNotification-irCIGaEl.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./LayoutCard-rFftX_5x.js";import"./Accordion-B0i5v90U.js";import"./Alert-BQ8YQR_W.js";import"./AlertIcon-C5b9VCt7.js";import"./AlertBadge-CNA6uKSn.js";import"./Align-8__Vbjw2.js";import"./TableFooterRow-B391BAgL.js";import"./SkeletonText-q8x3n-e-.js";import"./Avatar-C2H-R3m6.js";import"./AvatarStack-D6bPCT5Z.js";import"./Badge-CIynJGVc.js";import"./BigNumber-zhac89k-.js";import"./Breadcrumb-6vQEAbHW.js";import"./Link-Brltyk4S.js";import"./Heading-3nkwrjYk.js";import"./Legend-DEpFCRHA.js";import"./FileCardList-BaVbzUxM.js";import"./Image-B9Cscj9i.js";import"./CodeBlock-BiC9piZk.js";import"./CopyButton-B9mW4h-U.js";import"./Tooltip-BKgm2KH6.js";import"./react-children-utilities-B8hFFp2J.js";import"./Color-CZ1w209L.js";import"./Content-De6yv-na.js";import"./ContextualHelpTrigger-nxMOucmM.js";import"./CounterBadge-KUrZxjtT.js";import"./DonutChart-ClsX_6Hx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CMdk7KOR.js";import"./Header-B-ndv2TP.js";import"./Initials-CPfqnq7b.js";import"./InlineCode-RQOLEMSt.js";import"./LabeledValue-B3MQdaw0.js";import"./PopoverTrigger-CUVq5mS7.js";import"./Markdown-AKsw2lGU.js";import"./Separator-BA2h878Y.js";import"./Message-jo39yurl.js";import"./MessageSeparator-DSUYeihd.js";import"./NavigationGroup-C2BtXn54.js";import"./Notification-CrQoxCY-.js";import"./NotificationProvider-DwOg9r8C.js";import"./ProgressBar-DFtsm5DE.js";import"./Rating-DgNl63vx.js";import"./Skeleton-Bq2Z_NYu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
