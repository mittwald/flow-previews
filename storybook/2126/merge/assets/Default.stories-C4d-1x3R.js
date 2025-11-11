import{r as h,j as r}from"./iframe-sw6YBGs2.js";import{ac as m}from"./Modal-DxgoLEUd.js";import{L as u}from"./Label-CmtT7DCN.js";import{B as g}from"./Button-C3vsBXq_.js";import{v as C}from"./IconWarning-Mo4x9W3y.js";import{C as w}from"./CopyButton-lHl1l64h.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DI3ra1Po.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./index-DXtHeKIw.js";import"./Popover-CTuN8o_O.js";import"./context-D0JPrgtB.js";import"./useStatic-3-oc9s-0.js";import"./OverlayTrigger-C_lKypBz.js";import"./Dialog-vQ1BmT5h.js";import"./Button-C9KiGU0p.js";import"./utils-DUnEZ_OM.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C55dwVSC.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./RSPContexts-DsElqAB8.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./browser-CM4mIXp1.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./ControlledNotification-BkuRpHzl.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./LayoutCard-Cde2ypQu.js";import"./Accordion-BjIhC8Tw.js";import"./Action-_btOP2lG.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./ActionGroup-BXh7v2Sj.js";import"./Alert-BrKf053k.js";import"./AlertIcon-DOBK5Qiy.js";import"./AlertBadge-Da7lIov6.js";import"./Text-BcvoGUvL.js";import"./EmulatedBoldText-2hgsjV1R.js";import"./Align-Dz3OnvDk.js";import"./TableFooterRow-D8f9k0PV.js";import"./SkeletonText-CEL6wZBd.js";import"./Avatar-Kdd9ynB9.js";import"./AvatarStack-D0wFHkKp.js";import"./Badge-BabXZ_Zc.js";import"./BigNumber-DI_V9sbr.js";import"./Breadcrumb-DhhKvw_9.js";import"./Link-CMSh3a4Z.js";import"./Heading-BjeBhvap.js";import"./Legend-VgLIiYH1.js";import"./FileCardList-i5G6_w3p.js";import"./Image-sZiUBJ99.js";import"./CodeBlock-BNcfhLIz.js";import"./Color-CTvY4oH2.js";import"./Content-B9ARa_I0.js";import"./Section-l8vn1XNi.js";import"./ContextualHelpTrigger-DwcqWH2n.js";import"./CounterBadge-Bs1DA-RH.js";import"./DonutChart-Behnkh0T.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CkwoWD1S.js";import"./Header-BuQdBlmy.js";import"./Initials-eZxDYNMo.js";import"./react-children-utilities-kN0pvQuw.js";import"./InlineCode-Dk1HCl3v.js";import"./LabeledValue-vT0Jzwlv.js";import"./PopoverTrigger-DmY7SQcC.js";import"./Tooltip-DVn6jUem.js";import"./Markdown-DKYCkIEk.js";import"./Separator-Dex5_wmj.js";import"./Message-CtaJAHUw.js";import"./MessageSeparator-2Ri2MJ87.js";import"./NavigationGroup-Bm3sI2jt.js";import"./Notification-CjFKT80j.js";import"./NotificationProvider-LaKC0ems.js";import"./ProgressBar-DTrtZgpj.js";import"./Rating-DaBt_gtM.js";import"./Skeleton-B7reKJec.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const Xr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,Xr as __namedExportsOrder,Qr as default};
