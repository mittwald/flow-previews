import{j as r}from"./iframe-DpK2T2Nf.js";import{t as d,$ as l,Y as g,x as u,a0 as x}from"./IconWarning-Cg4y-Lel.js";import{L as m}from"./Link-CNUblXN_.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-BgQf6oTj.js";import{B as o}from"./Button-KfPOVuM-.js";import{T as c}from"./Text-ClluuiBD.js";import{I as M}from"./Image-C1ftWFwl.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-BrVjDT-U.js";import{c as k}from"./FileCardList-vN5JX68X.js";import"./Section-kGcYQ44e.js";import{H as S}from"./Heading-CcD2dsF3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./remote-Cox__P30.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./context-CrPZXd5J.js";import"./utils-5sSs2C2Q.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./Accordion-AedciLQh.js";import"./dynamic-CdnvgWlT.js";import"./ActionGroup-CLHBsVX4.js";import"./Alert-DHDG4MsT.js";import"./AlertIcon-05dXw9V_.js";import"./AlertBadge-CiTXQfnp.js";import"./Align-BSBJJ5zM.js";import"./Popover-BkpsMHU6.js";import"./context-CPEq1qsE.js";import"./Button--HL08e3g.js";import"./ProgressBar-BP1RROy1.js";import"./Hidden-BSBCwIf4.js";import"./RSPContexts-7V3qTNb_.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./browser-Ckyi0rpL.js";import"./useStatic-3aliboqk.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./TableFooterRow-CnVEUuwp.js";import"./SkeletonText-DSV460fR.js";import"./AvatarStack-45n5MqLA.js";import"./Badge-DcxmWiGs.js";import"./BigNumber-Cq7hcHwo.js";import"./Breadcrumb-B1G9czV2.js";import"./Legend-CEh7Zw0y.js";import"./Color-DQzo7sAT.js";import"./Content-9dvKA7Z7.js";import"./Label-Dg6bYAOF.js";import"./ContextualHelpTrigger-CBiXLQUX.js";import"./CounterBadge-C-xbOE4o.js";import"./DonutChart-DJ670UUe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCNzeETN.js";import"./Header-eZj9M83o.js";import"./Initials-DhFZ0NCC.js";import"./InlineCode-08Yq6ux1.js";import"./PopoverTrigger-DK96Ugpl.js";import"./LoadingSpinner-BQl4MMkz.js";import"./Separator-EDbsgt1x.js";import"./Message-C8l33cRQ.js";import"./MessageSeparator-B4es_r1t.js";import"./NavigationGroup-CzqtYd5z.js";import"./Notification-DFv7qa6j.js";import"./NotificationProvider-mo_Pr_YX.js";import"./ProgressBar-COfErnlM.js";import"./Rating-BjEvYZAj.js";import"./Skeleton-Dv7muKa-.js";import"./EmulatedBoldText-Bc0AgoG-.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,zr as __namedExportsOrder,wr as default};
