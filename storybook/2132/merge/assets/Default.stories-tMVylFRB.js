import{j as r}from"./iframe-N2ZMMBua.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-BFO_JV1T.js";import{L as m}from"./Link-DGEEGfY5.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-Ce_qBq4J.js";import{B as o}from"./Button-CQTX7C-7.js";import{T as c}from"./Text-B0nKVVvA.js";import{I as M}from"./Image-c560F83g.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-UT9YFCej.js";import{c as k}from"./FileCardList-BFe4Um8S.js";import"./Section-Dlm8T0mZ.js";import{H as S}from"./Heading-UwbM-u6i.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./context-CVOB-S2d.js";import"./utils-UqP59DSc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./Accordion-Cx7YOjK-.js";import"./dynamic-Bg49ug6j.js";import"./ActionGroup-CcC1RkNL.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./useStatic-BK7FFX-B.js";import"./Alert-C4x5XvaN.js";import"./AlertIcon-DP3sd6M_.js";import"./AlertBadge-CCMWeYGv.js";import"./Align-Ds9Q2xSR.js";import"./Popover-ITKHSPMr.js";import"./context-0hb6Imhj.js";import"./Button-ckJwL_Qm.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./RSPContexts-W5rfe12r.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./browser-C3uOmI6O.js";import"./OverlayTrigger-CtrEPdBT.js";import"./TableFooterRow-BSMhJEWV.js";import"./SkeletonText-C0dZ71Dc.js";import"./AvatarStack-DTzcVfX5.js";import"./Badge-CmQdROSx.js";import"./BigNumber-BpYjVhMM.js";import"./Breadcrumb-BU79UJRj.js";import"./Legend-DPTWJJT_.js";import"./Color-g_oGdWKO.js";import"./Content-DKIO4hDm.js";import"./Label-CNIsCRQn.js";import"./ContextualHelpTrigger-MtOPALsd.js";import"./CounterBadge-CnoO7JzY.js";import"./DonutChart-D5hSwyhh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C92wbj0P.js";import"./Header-BplYHpBk.js";import"./Initials-1nVpomP1.js";import"./InlineCode-B0WCYRLN.js";import"./PopoverTrigger-DLnLI4gj.js";import"./LoadingSpinner-BF2HGxsW.js";import"./Separator-DrFjGgJ9.js";import"./Message-CzM_qt2p.js";import"./MessageSeparator-khAvmqi6.js";import"./NavigationGroup-p6nb8hAj.js";import"./Notification-DLP1k1dH.js";import"./NotificationProvider-VEcgpjyi.js";import"./ProgressBar-Dgh4xYdk.js";import"./Rating-CceFiRCw.js";import"./Skeleton-CkbNl4QS.js";import"./EmulatedBoldText-zrEG-jWJ.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Fr as __namedExportsOrder,zr as default};
