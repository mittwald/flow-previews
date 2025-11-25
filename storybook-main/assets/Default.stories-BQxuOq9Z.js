import{j as r}from"./iframe-Dswl8YqW.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-Dt5PaZc0.js";import{L as m}from"./Link-2_MM-8En.js";import{aa as s,ab as h,M as j,g as f,h as p}from"./Modal-CHITtey4.js";import{B as o}from"./Button-BlDvIS3Y.js";import{T as c}from"./Text-CuuEScv1.js";import{I as M}from"./Image-CfXDNzs_.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-BvulIpzL.js";import{e as b}from"./FileCardList-C3qXU2FS.js";import"./Section-B6yNflVq.js";import{H as k}from"./Heading-iCy8jlSp.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./context-DC5A8m43.js";import"./utils-7BbO5OC0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./dynamic-DeI_eRCJ.js";import"./context-BYCR6GGl.js";import"./Button-CdXhm7oQ.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./browser-BqLtz9Zq.js";import"./useStatic-DgEZfjHg.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./ActionGroup-DkHaLZ1F.js";import"./Alert-CNX0ngss.js";import"./AlertIcon-BGEjgne8.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./Label-CMIuj4QW.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ControlledNotification-Cdu3NdkW.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";import"./EmulatedBoldText-BY5a05VQ.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Rr as default};
