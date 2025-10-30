import{j as r,r as j}from"./iframe-PDaUHho1.js";import{u as d,F as u,t as g,a as h}from"./Form-BqgqwU1K.js";import{B as i}from"./Button-C5eOeaT9.js";import{S as b}from"./Section-HyeX5WSL.js";import{A as E}from"./ActionGroup-U5_rjuL9.js";import{s as f}from"./Action-BuqSGnOY.js";import{A as m,T as l,F as S,O as T}from"./Modal-Dp1YaUNn.js";import{L as a}from"./Label-BV0OGa_g.js";import"./index-nuYtCEEu.js";import"./dynamic-DqsoKxlb.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./clsx-B-dksMZM.js";import"./index-B4HwJOZh.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./context-DBDDiU0I.js";import"./browser-Dn1Bftrm.js";import"./utils-WYXKBT_h.js";import"./IconWarning-B0hQIuUq.js";import"./Text-PjSitUb9.js";import"./EmulatedBoldText-DeDAxtsF.js";import"./LoadingSpinner-bLHLQdUH.js";import"./Button-vCn3sloq.js";import"./ProgressBar-m4wkDJ9q.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-msSK4oeu.js";import"./useFocusable-CU77Oyp_.js";import"./Dialog-Bz5XATVl.js";import"./RSPContexts-DnH8q5jT.js";import"./OverlayArrow-j70_eukt.js";import"./useControlledState-DpuOrhgy.js";import"./Collection-CoTpEGUK.js";import"./CollectionBuilder-CiodENHi.js";import"./SelectionIndicator-B4sxL3Ui.js";import"./Separator-BOyasXxD.js";import"./getActionGroupSlot-BbmM7byy.js";import"./useStatic-UwW6yb2T.js";import"./context-BGWGXkWs.js";import"./Popover-CQRfq8Pn.js";import"./OverlayTrigger-D2bNYkcD.js";import"./ControlledNotification-BKShNQFf.js";import"./ClearPropsContextView-DBaaVQ6i.js";import"./LayoutCard-BCU7EWfF.js";import"./Accordion-CUJJDz1v.js";import"./Alert-D0YSmsoS.js";import"./AlertIcon-VJR10kZy.js";import"./AlertBadge-DP82Q-mW.js";import"./Align-CQuCxEQW.js";import"./TableFooterRow-BTdksuBZ.js";import"./SkeletonText-Dz0C1SKB.js";import"./Avatar-BQHWoetz.js";import"./AvatarStack-sv2krauL.js";import"./Badge-DOKA-IzE.js";import"./BigNumber-Df4O79LO.js";import"./Breadcrumb-UnONgTrt.js";import"./Link-DFMuHwQ1.js";import"./Heading-CDhtmS_q.js";import"./Legend-CTLT6OWF.js";import"./FileCardList-KFpTNQWp.js";import"./Image-D0T37yoP.js";import"./CodeBlock-DZbdZqZi.js";import"./CopyButton-DGO3kvs8.js";import"./Tooltip-B0d05Nt9.js";import"./react-children-utilities-DeOMbJlb.js";import"./Color-D98-2g19.js";import"./Content-BBxZEkAS.js";import"./ContextualHelpTrigger-B-T84-qA.js";import"./CounterBadge-CusTsxN9.js";import"./DonutChart-DrvGprf2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BHL4pB90.js";import"./Header-DvtIoJrT.js";import"./Initials-CWkkAmwh.js";import"./InlineCode-xDBHCugB.js";import"./LabeledValue-lvjpv348.js";import"./PopoverTrigger-DCoz2Rln.js";import"./Markdown-BNg1pbBe.js";import"./Separator-DybfQVaE.js";import"./Message-DWGicTw7.js";import"./MessageSeparator-UKqV2I5b.js";import"./NavigationGroup-BUlijHQ1.js";import"./Notification-B5tjELS9.js";import"./NotificationProvider-L7cl-BrL.js";import"./ProgressBar-T812VwvU.js";import"./Rating-CkHsmGwh.js";import"./Skeleton-DtOpr1fC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
