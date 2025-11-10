import{j as r,r as j}from"./iframe-D4AGuMnx.js";import{u as d,F as u,t as g,a as h}from"./Form-D11r0Dhg.js";import{B as i}from"./Button-DtTeM47l.js";import{S as b}from"./Section-C7ZxuYfk.js";import{A as E}from"./ActionGroup-CVIQhVAR.js";import{s as f}from"./Action-BJsLMg4b.js";import{A as m,T as l,F as S,O as T}from"./Modal-tGW6fwkz.js";import{L as a}from"./Label-Uu7W5RgC.js";import"./index-nuYtCEEu.js";import"./dynamic-oZwQWaGw.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./clsx-B-dksMZM.js";import"./index-DNvdHJqk.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./browser-3OZPWisM.js";import"./utils-CqMmhAxq.js";import"./IconWarning-BC3tK9kj.js";import"./Text-BtpbrdrH.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./Dialog-Dct0khyO.js";import"./RSPContexts-B4Pxvc-Q.js";import"./OverlayArrow-DclzRyUb.js";import"./useControlledState-DvYaxqI_.js";import"./Collection-BeK_S4wY.js";import"./CollectionBuilder-CWpdOayg.js";import"./SelectionIndicator-D5j5oFjn.js";import"./Separator-YST-GtXN.js";import"./getActionGroupSlot-y53Ggupv.js";import"./useStatic-CK2cw9Tx.js";import"./context-DUgKYd_B.js";import"./Popover-dCAEc0Wh.js";import"./OverlayTrigger-Dm3E0-9T.js";import"./ControlledNotification-RGp8id5u.js";import"./ClearPropsContextView-BN-YBkpQ.js";import"./LayoutCard-DtuqdXZV.js";import"./Accordion-Ci8LO9GL.js";import"./Alert-DRlhPKAM.js";import"./AlertIcon-DIdf3aQ3.js";import"./AlertBadge-_JwpxNnD.js";import"./Align-7TnWq-Gv.js";import"./TableFooterRow-Dfn6es0D.js";import"./SkeletonText-Bz6UmpGu.js";import"./Avatar-Cuj_93mY.js";import"./AvatarStack-DXokn6ok.js";import"./Badge-BJDG9oB6.js";import"./BigNumber-Dhgfv4nR.js";import"./Breadcrumb-B79bCRw5.js";import"./Link-BLPRVcLK.js";import"./Heading-BsaQzqWp.js";import"./Legend-SmnDI-CC.js";import"./FileCardList-CHAaonsB.js";import"./Image-BkVvTdPU.js";import"./CodeBlock-C0V9miuL.js";import"./CopyButton-D7hetntY.js";import"./Tooltip-BSoUWhLw.js";import"./react-children-utilities-Cr8KMn7a.js";import"./Color-BvEEtghO.js";import"./Content-CrST6Q2Z.js";import"./ContextualHelpTrigger-Du-yR4dj.js";import"./CounterBadge-DGQicx2G.js";import"./DonutChart-DycP2oAV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfL5ZHfz.js";import"./Header-ByxBqB9K.js";import"./Initials-Db_RIkxH.js";import"./InlineCode-DuyDsWxz.js";import"./LabeledValue-UbfXjNpO.js";import"./PopoverTrigger-CvAH8Qs9.js";import"./Markdown-m3hztiRY.js";import"./Separator-Bft2GaAL.js";import"./Message-CKIMU6VV.js";import"./MessageSeparator-EOk3gZe0.js";import"./NavigationGroup-dyXYy0re.js";import"./Notification-CH_kjSuU.js";import"./NotificationProvider-Yu7V6SyN.js";import"./ProgressBar-CF2CxjRB.js";import"./Rating-D2_jK4Ep.js";import"./Skeleton-Ju_lHyZD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
