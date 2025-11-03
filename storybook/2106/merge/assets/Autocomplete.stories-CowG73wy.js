import{j as r,r as j}from"./iframe-Cvytdoxw.js";import{u as d,F as u,t as g,a as h}from"./Form-DRmerFdk.js";import{B as i}from"./Button-Cr3d2kpx.js";import{S as b}from"./Section-DYoUqfIw.js";import{A as E}from"./ActionGroup-D9Rk5LUe.js";import{s as f}from"./Action-BPPG3O54.js";import{A as m,T as l,F as S,O as T}from"./Modal-Bh-MQA8I.js";import{L as a}from"./Label-BMNKmHxb.js";import"./index-nuYtCEEu.js";import"./dynamic-BZ_eTWTP.js";import"./flowComponent-BakvHPDm.js";import"./index-D8rYYAP0.js";import"./clsx-B-dksMZM.js";import"./index-CTthHXbC.js";import"./useLocalizedStringFormatter-Bip3mv8b.js";import"./context-Cn_ZHjoc.js";import"./browser-DEx-HDtZ.js";import"./utils-cle9p6h6.js";import"./IconWarning-DXcNdK9V.js";import"./Text-DIznXbTR.js";import"./EmulatedBoldText-D3YXTSUL.js";import"./LoadingSpinner-DkHZrmVz.js";import"./Button-B_aqk9rc.js";import"./ProgressBar-Ba3c9wf0.js";import"./Hidden-C4KiavwU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DUuUR0t2.js";import"./useFocusable-suhCImuH.js";import"./Dialog-B6VEzsps.js";import"./RSPContexts-Cd4dinro.js";import"./OverlayArrow-sYsIV9sV.js";import"./useControlledState-jiOBhksC.js";import"./Collection-DGRdCInl.js";import"./CollectionBuilder-uYz3_9MR.js";import"./SelectionIndicator-C753lFWW.js";import"./Separator-CAXwT-nc.js";import"./getActionGroupSlot-CmO7nmQr.js";import"./useStatic-Dta6Atim.js";import"./context-onOyb17u.js";import"./Popover-_9KKs073.js";import"./OverlayTrigger-BFXPSWkQ.js";import"./ControlledNotification-DsIk9QU4.js";import"./ClearPropsContextView-BVktS7r5.js";import"./LayoutCard-nhP37MKY.js";import"./Accordion-CDWDL4xq.js";import"./Alert-CR-srYX8.js";import"./AlertIcon-CukGBwNm.js";import"./AlertBadge-CEvbH2lz.js";import"./Align-DVL9xSIP.js";import"./TableFooterRow-BQFakzoh.js";import"./SkeletonText-BGMqp9_o.js";import"./Avatar-coHNON-U.js";import"./AvatarStack-Dq2-h8bM.js";import"./Badge-hpN44Mwp.js";import"./BigNumber-DGQzC5gf.js";import"./Breadcrumb-ls78LsH2.js";import"./Link-bTAFXJd1.js";import"./Heading-CmmEit1O.js";import"./Legend-CId88Y2P.js";import"./FileCardList-DMN_LNU6.js";import"./Image-D6lbZEhR.js";import"./CodeBlock-BZlftpwu.js";import"./CopyButton-yRpJ5rJW.js";import"./Tooltip-COgrup7D.js";import"./react-children-utilities-rEMilI0O.js";import"./Color-lCnOJEQC.js";import"./Content-CqmkYIyJ.js";import"./ContextualHelpTrigger-B5racSVm.js";import"./CounterBadge-B_mMKrzF.js";import"./DonutChart-beNdvRJw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B_SiYVdN.js";import"./Header-DRWZEQxS.js";import"./Initials-CLGaLGtP.js";import"./InlineCode-DET-O1F-.js";import"./LabeledValue-B_X3YBZf.js";import"./PopoverTrigger-YysPgKmt.js";import"./Markdown-6vHHRtjm.js";import"./Separator-DUpNiSJB.js";import"./Message-dEZb7E4D.js";import"./MessageSeparator-DeXm7bEp.js";import"./NavigationGroup-BgVHgIS2.js";import"./Notification-D8bczIek.js";import"./NotificationProvider-dtfpNt61.js";import"./ProgressBar-C1UDAnoU.js";import"./Rating-Dprme4W8.js";import"./Skeleton-BLm4rTW6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
