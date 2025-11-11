import{j as r,r as j}from"./iframe-sw6YBGs2.js";import{u as d,F as u,t as g,a as h}from"./Form-DmMVlFwM.js";import{B as i}from"./Button-C3vsBXq_.js";import{S as b}from"./Section-l8vn1XNi.js";import{A as E}from"./ActionGroup-BXh7v2Sj.js";import{s as f}from"./Action-_btOP2lG.js";import{A as m,T as l,F as S,O as T}from"./Modal-DxgoLEUd.js";import{L as a}from"./Label-CmtT7DCN.js";import"./index-nuYtCEEu.js";import"./dynamic-DI3ra1Po.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./clsx-B-dksMZM.js";import"./index-DXtHeKIw.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./context-C55dwVSC.js";import"./browser-CM4mIXp1.js";import"./utils-DUnEZ_OM.js";import"./IconWarning-Mo4x9W3y.js";import"./Text-BcvoGUvL.js";import"./EmulatedBoldText-2hgsjV1R.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./Button-C9KiGU0p.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./Dialog-vQ1BmT5h.js";import"./RSPContexts-DsElqAB8.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./useStatic-3-oc9s-0.js";import"./context-D0JPrgtB.js";import"./Popover-CTuN8o_O.js";import"./OverlayTrigger-C_lKypBz.js";import"./ControlledNotification-BkuRpHzl.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./LayoutCard-Cde2ypQu.js";import"./Accordion-BjIhC8Tw.js";import"./Alert-BrKf053k.js";import"./AlertIcon-DOBK5Qiy.js";import"./AlertBadge-Da7lIov6.js";import"./Align-Dz3OnvDk.js";import"./TableFooterRow-D8f9k0PV.js";import"./SkeletonText-CEL6wZBd.js";import"./Avatar-Kdd9ynB9.js";import"./AvatarStack-D0wFHkKp.js";import"./Badge-BabXZ_Zc.js";import"./BigNumber-DI_V9sbr.js";import"./Breadcrumb-DhhKvw_9.js";import"./Link-CMSh3a4Z.js";import"./Heading-BjeBhvap.js";import"./Legend-VgLIiYH1.js";import"./FileCardList-i5G6_w3p.js";import"./Image-sZiUBJ99.js";import"./CodeBlock-BNcfhLIz.js";import"./CopyButton-lHl1l64h.js";import"./Tooltip-DVn6jUem.js";import"./react-children-utilities-kN0pvQuw.js";import"./Color-CTvY4oH2.js";import"./Content-B9ARa_I0.js";import"./ContextualHelpTrigger-DwcqWH2n.js";import"./CounterBadge-Bs1DA-RH.js";import"./DonutChart-Behnkh0T.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CkwoWD1S.js";import"./Header-BuQdBlmy.js";import"./Initials-eZxDYNMo.js";import"./InlineCode-Dk1HCl3v.js";import"./LabeledValue-vT0Jzwlv.js";import"./PopoverTrigger-DmY7SQcC.js";import"./Markdown-DKYCkIEk.js";import"./Separator-Dex5_wmj.js";import"./Message-CtaJAHUw.js";import"./MessageSeparator-2Ri2MJ87.js";import"./NavigationGroup-Bm3sI2jt.js";import"./Notification-CjFKT80j.js";import"./NotificationProvider-LaKC0ems.js";import"./ProgressBar-DTrtZgpj.js";import"./Rating-DaBt_gtM.js";import"./Skeleton-B7reKJec.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
