import{j as r,r as j}from"./iframe-oci4ptrj.js";import{u as d,F as u,t as g,a as h}from"./Form-CWXQHvRO.js";import{B as i}from"./Button-eO-ASnyK.js";import{S as b}from"./Section-BqsjHtKC.js";import{A as E}from"./ActionGroup-BCSCA9xU.js";import{s as f}from"./Action-BqzVohHB.js";import{A as m,T as l,F as S,O as T}from"./Modal-ClTHDKZJ.js";import{L as a}from"./Label-BAtgzmlj.js";import"./index-nuYtCEEu.js";import"./dynamic-Bjr85D4p.js";import"./flowComponent-C2w89MO3.js";import"./index-DzNagtAD.js";import"./clsx-B-dksMZM.js";import"./index-BOV_kcUj.js";import"./useLocalizedStringFormatter-d3uviZeO.js";import"./context-DcUd--Pd.js";import"./browser-CA-_dWQR.js";import"./utils-BqyPjKLh.js";import"./IconWarning-DHgEivld.js";import"./Text-BC4L9_-c.js";import"./EmulatedBoldText-DLGY6dL5.js";import"./LoadingSpinner-Ce9YNblG.js";import"./Button-KMwH7pyb.js";import"./ProgressBar-BWGxJHnn.js";import"./Hidden-BTg-KeYM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-GHPD41Xj.js";import"./useFocusable-Dp9h7abG.js";import"./Dialog-BNJbCqlP.js";import"./RSPContexts-Ba4NKIWK.js";import"./OverlayArrow-DTr5Iaqo.js";import"./useControlledState-DDWL0DP8.js";import"./Collection-BMK5V4Kq.js";import"./CollectionBuilder-v2B4mNBt.js";import"./SelectionIndicator-B29MN-WG.js";import"./Separator-BHmM9LBW.js";import"./getActionGroupSlot-DN_BwUZY.js";import"./useStatic-Dg5syQGi.js";import"./context-CY6wUJcA.js";import"./Popover-BgPcaCsv.js";import"./OverlayTrigger-XJjkijZP.js";import"./ControlledNotification-CtEY5SML.js";import"./ClearPropsContextView-Cq8Pr-2n.js";import"./LayoutCard-BeWDWJMn.js";import"./Accordion-CYorM61X.js";import"./Alert-CAKY88Nb.js";import"./AlertIcon-CnQ2e6rw.js";import"./AlertBadge-CJ49mG81.js";import"./Align-C8DjyZjw.js";import"./TableFooterRow-Cl02B7LL.js";import"./SkeletonText-CnrcMbjq.js";import"./Avatar-DfMs39fp.js";import"./AvatarStack-4WBR-7X1.js";import"./Badge-BxjS4WAu.js";import"./BigNumber-DzCpGuON.js";import"./Breadcrumb-DMg5f8JX.js";import"./Link-CqXHSRvB.js";import"./Heading-C66T-W7d.js";import"./Legend-9J4PLNv2.js";import"./FileCardList-DYlHj2Op.js";import"./Image-DhsxEBuG.js";import"./CodeBlock-BNK1aCmv.js";import"./CopyButton-BNX1PJqg.js";import"./Tooltip-s-7knXV2.js";import"./react-children-utilities-DMJR_FXU.js";import"./Color-BKC_Yk11.js";import"./Content-Bcd3Dcbz.js";import"./ContextualHelpTrigger-DenoHM9c.js";import"./CounterBadge-Bq2uMDn7.js";import"./DonutChart-CywyKNmf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-PuEJrwWX.js";import"./Header-D58-wiVK.js";import"./Initials-DO7BUWcj.js";import"./InlineCode-xz8RRo8y.js";import"./LabeledValue-8alV3kb7.js";import"./PopoverTrigger-GYLBAt5X.js";import"./Markdown-CnIy4cHY.js";import"./Separator--yDeOmz1.js";import"./Message-BQr9h5FH.js";import"./MessageSeparator-BSbcqWRj.js";import"./NavigationGroup-BLEWgi8U.js";import"./Notification-StB_4mj6.js";import"./NotificationProvider-BYADytI6.js";import"./ProgressBar-D71YL-U_.js";import"./Rating-D6p8cglX.js";import"./Skeleton-BG5LDZdF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
