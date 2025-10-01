import{j as r}from"./iframe-DRU2mvvl.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Ns7aLDcg.js";import{L as m}from"./Link-qtNdIHqj.js";import{H as s}from"./HeaderNavigation-BBiC35Cr.js";import{B as o}from"./Button-B0nESNPa.js";import{T as p}from"./Text-CEDtxg_Y.js";import{I as B}from"./Image-CwphxZN2.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BV6MZTDs.js";import{C as y,M as c}from"./MenuItem-CBV3vhF8.js";import{C as A}from"./ContextMenuTrigger-CRMqge80.js";import"./ContextMenuSection-S05W1Jlf.js";import{a as D,M as E}from"./Modal-BSRaqIJY.js";import{H as G}from"./Heading-iDuS5CV6.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./utils-CFpcVBbf.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./dynamic-BlISIwZy.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DycDZ9Cy.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./Text-Qj1KdidL.js";import"./AlertIcon-hPXRL55R.js";import"./Action-DTfm05Ga.js";import"./context-BmZA5kUX.js";import"./useStatic-ZRFoobPh.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./Popover-6CLh3lVk.js";import"./useOverlayController-DdAbU6-E.js";import"./OverlayContextProvider-BinHXkpi.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./ClearPropsContextView-BOQrNGpC.js";import"./Switch-ZrdfN8bX.js";import"./useMakeFocusable-BXp11O4i.js";import"./useToggleState-DJNV6eOo.js";import"./useFormReset-BYiU13z5.js";import"./OverlayTrigger-B61nk-y7.js";import"./ControlledNotification-DmUD3IAV.js";import"./DialogTriggerView-BNVlE9lS.js";import"./Overlay-BvY1KI8C.js";import"./ButtonView-DVYSGyVv.js";import"./Heading-Dpu9vKUA.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
