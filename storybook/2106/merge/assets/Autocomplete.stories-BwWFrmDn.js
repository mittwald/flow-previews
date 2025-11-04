import{j as r,r as j}from"./iframe-UywY67Bv.js";import{u as d,F as u,t as g,a as h}from"./Form-BecK6Ytt.js";import{B as i}from"./Button-Gbk6h-JG.js";import{S as b}from"./Section-CaIrT3Oi.js";import{A as E}from"./ActionGroup-8065NRIs.js";import{s as f}from"./Action-CUqRfkG0.js";import{A as m,T as l,F as S,O as T}from"./Modal-B1XsSRlG.js";import{L as a}from"./Label-BdSCfiWt.js";import"./index-nuYtCEEu.js";import"./dynamic-D6UsKhYE.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./clsx-B-dksMZM.js";import"./index-BZZbJWsv.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./browser-89HKgK6A.js";import"./utils-Q3LyW17A.js";import"./IconWarning-DwFhTB3p.js";import"./Text-ACfuEtxv.js";import"./EmulatedBoldText-IS2YzD6-.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./Dialog-QZmtNN3w.js";import"./RSPContexts-DKA2ogYJ.js";import"./OverlayArrow-B1W-06M-.js";import"./useControlledState-YHruiK90.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./useStatic-CXquBJ6C.js";import"./context-BigokEM3.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./ControlledNotification-D50j9sIR.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./LayoutCard-C0EPvsU3.js";import"./Accordion-BK4GuAoC.js";import"./Alert-C0EsiSv_.js";import"./AlertIcon-BnqUCYzd.js";import"./AlertBadge-B7Gau8m7.js";import"./Align-BmJOMdIy.js";import"./TableFooterRow-Bv0-bpAh.js";import"./SkeletonText-DpHKYHJZ.js";import"./Avatar-M318ynuv.js";import"./AvatarStack-Flh6B9Tb.js";import"./Badge-DHwTV9Zs.js";import"./BigNumber-BZRncc6S.js";import"./Breadcrumb-BZSCf-6e.js";import"./Link-CLqTFJh1.js";import"./Heading-DokAbZVz.js";import"./Legend-u8qZQHCw.js";import"./FileCardList-B3N0e0dv.js";import"./Image-CM2sjxlA.js";import"./CodeBlock-BBJItXDs.js";import"./CopyButton-CPARqyj4.js";import"./Tooltip-DhQmcZ0r.js";import"./react-children-utilities-cyw5EAJU.js";import"./Color-BQTRcc4A.js";import"./Content-CDtjT_Xe.js";import"./ContextualHelpTrigger-Nj7CEmIW.js";import"./CounterBadge-BvFCF2iG.js";import"./DonutChart-DA4lEOuY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DYNPakqr.js";import"./Header-NJIzvUu8.js";import"./Initials-BicwQCWx.js";import"./InlineCode-IDIJw-r4.js";import"./LabeledValue-4mP07mAd.js";import"./PopoverTrigger-BnwqDM04.js";import"./Markdown-DLtx481N.js";import"./Separator-Bue3T6x6.js";import"./Message-CKkR5n6-.js";import"./MessageSeparator-DyuDr-P8.js";import"./NavigationGroup-CR-zeo24.js";import"./Notification-DuT0orJi.js";import"./NotificationProvider-CBFCjlXq.js";import"./ProgressBar-DwzJ5Krm.js";import"./Rating-DCUiyl_B.js";import"./Skeleton-DYUui1jC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
