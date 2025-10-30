import{j as r,r as j}from"./iframe-iStLwuZ7.js";import{u as d,F as u,t as g,a as h}from"./Form-DkFEHnE2.js";import{B as i}from"./Button-DeYIfmY1.js";import{S as b}from"./Section-Dc_V4FCk.js";import{A as E}from"./ActionGroup-szYqUjDu.js";import{s as f}from"./Action-CBX9L7t4.js";import{A as m,T as l,F as S,O as T}from"./Modal-CvJtPnGb.js";import{L as a}from"./Label-Q1Aicm4B.js";import"./index-nuYtCEEu.js";import"./dynamic-BC0kG87y.js";import"./flowComponent-BgccJZsB.js";import"./index-BbqvJdms.js";import"./clsx-B-dksMZM.js";import"./index-DcihAMJC.js";import"./useLocalizedStringFormatter-nySSu_zi.js";import"./context-abCQqTkG.js";import"./browser-D_N9MqU0.js";import"./utils-En5R44lx.js";import"./IconWarning-DFqNAy-A.js";import"./Text-Bm93Qc7O.js";import"./EmulatedBoldText-Bxo0dRe8.js";import"./LoadingSpinner-Bbl45bGl.js";import"./Button-Cm_HfJV4.js";import"./ProgressBar-BI2riqcs.js";import"./Hidden-Dy-IvjOH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-LOcsQEvn.js";import"./useFocusable-BrL0nAob.js";import"./Dialog-WSuFRoqu.js";import"./RSPContexts-LTaLIYp5.js";import"./OverlayArrow-SEOPpry_.js";import"./useControlledState-BI2V3xrC.js";import"./Collection-BuxUMZwe.js";import"./CollectionBuilder-CuL3Q7YH.js";import"./SelectionIndicator-BKv19ZSu.js";import"./Separator-CHkxKTJO.js";import"./getActionGroupSlot-Df52Fbgc.js";import"./useStatic-TN_NP4Rc.js";import"./context-BkQICaTP.js";import"./Popover-t8MFWx16.js";import"./OverlayTrigger-3eg2WHd6.js";import"./ControlledNotification-DvN-R_5x.js";import"./ClearPropsContextView-8CvEVPvl.js";import"./LayoutCard-BcrcSPzt.js";import"./Accordion-DrSXg7Ka.js";import"./Alert-B1uLVc_c.js";import"./AlertIcon-DkyVKzRm.js";import"./AlertBadge-Cv_3_adP.js";import"./Align-COnCjWi4.js";import"./TableFooterRow-D_Hejorf.js";import"./SkeletonText-CuqjBuzH.js";import"./Avatar-Dh1n43PQ.js";import"./AvatarStack-C_D0L7lk.js";import"./Badge-PtfBqhfx.js";import"./BigNumber-mzJgponV.js";import"./Breadcrumb-BqWMB86a.js";import"./Link-bFvZbohi.js";import"./Heading-HUlQjbPG.js";import"./Legend-C1HGNxYy.js";import"./FileCardList-CGsJO8vl.js";import"./Image-xZciv1rc.js";import"./CodeBlock-BrJTNUpu.js";import"./CopyButton-D9mapmFs.js";import"./Tooltip-jsOI3yF9.js";import"./react-children-utilities-D0BQ-VMp.js";import"./Color-DUgLAHW5.js";import"./Content-D-pd4nBC.js";import"./ContextualHelpTrigger-BKy97cgV.js";import"./CounterBadge-BOfAga5C.js";import"./DonutChart-DuqRwyEE.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DxaN0syG.js";import"./Header-DNUX0qV9.js";import"./Initials-ChZVCYlG.js";import"./InlineCode-CMVEIP31.js";import"./LabeledValue-84Y43aLQ.js";import"./PopoverTrigger-ByXAc-Gw.js";import"./Markdown-Bdo7mHUi.js";import"./Separator-DnWuhjcy.js";import"./Message-DR6gK3zq.js";import"./MessageSeparator-Bw-kWKuc.js";import"./NavigationGroup-BWEvePkz.js";import"./Notification-Z8Iv5hPs.js";import"./NotificationProvider--Nk8mtYw.js";import"./ProgressBar-DCi9eJrq.js";import"./Rating-CSI0WMXP.js";import"./Skeleton-Mw_CW48q.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
