import{j as r}from"./iframe-B7R3Cp0m.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-CiDVbDUI.js";import{L as m}from"./Link-BM18EQ80.js";import{H as s}from"./HeaderNavigation-BrSrPd_P.js";import{B as o}from"./Button-BfLhmrhP.js";import{T as p}from"./Text-mmmtihIj.js";import{I as B}from"./Image-D28M7Eie.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-D20QDC8P.js";import{C as y,M as c}from"./MenuItem-BHXpMcay.js";import{C as A}from"./ContextMenuTrigger-BNEAMBMv.js";import"./ContextMenuSection-Qzqr7kFk.js";import{a as D,M as E}from"./Modal-CUBbdEX9.js";import{H as G}from"./Heading-CSRs2ihp.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./index-DEEeTq16.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./context-DZWDYeWp.js";import"./utils-Cx-QUl4i.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CZzcdL0j.js";import"./useFocus-BfnX2cH5.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./dynamic-DQGoa_Us.js";import"./LoadingSpinner-CBvMx9JI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTyr71oU.js";import"./ProgressBar-BUsdfXWy.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D9qXvoab.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./Text-Cq8XMVEi.js";import"./AlertIcon-B0WxKp1R.js";import"./Action-Duus-uy7.js";import"./context-s2Psh2SW.js";import"./useStatic-B9aD_BAc.js";import"./getActionGroupSlot-kiQExVjr.js";import"./Popover-BWO2bA7O.js";import"./useOverlayController-DNghvfr6.js";import"./OverlayContextProvider-B7mj50o_.js";import"./Dialog-qQprQaf0.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./VisuallyHidden-7GIVT4u3.js";import"./ClearPropsContextView-hmq_Snis.js";import"./Switch-B4gyalxJ.js";import"./useMakeFocusable-Co-fjfKM.js";import"./useToggleState-CV2L6iDV.js";import"./useFormReset-ltvOIr7i.js";import"./OverlayTrigger-CAnQWu2d.js";import"./ControlledNotification-C5B5aMg4.js";import"./DialogTriggerView-DbJ-L5yy.js";import"./Overlay-Dgom1ePp.js";import"./ButtonView-BEoiJla2.js";import"./Heading-CiGgeB_H.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
